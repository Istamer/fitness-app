const Router = require('express')
const { check, validationResult } = require("express-validator")
const jwt = require("jsonwebtoken");
const hash = require("../utils/password");
const authMiddleware = require('../middlewaree/auth')
//const roleMiddleware = require('../middlewaree/role')
const User = require("../database/models/User");
const { secret } = require("../config")

const router = new Router()

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, { expiresIn: "24h" })
}

router.post('/registration', [
    check('name', "Имя пользователя не может быть пустым").notEmpty(),
    check("email", "Invalid email").isEmail(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({ min: 4, max: 10 })
], async (req, res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send({ msg: "uncorrect request", errors });
        }

        const { name, email } = req.body;
        const userDB = await User.findOne({ email });

        if (userDB) {
            return res.status(400).send({ msg: `Email '${email}' alredy exist` });
        }
        const password = hash.hashPassword(req.body.password);
        const newUser = await User.create({ name, email, password });
        res.status(201).send({ msg: "Registration successful" });

    } catch (e) {
        console.error(e);
        res.status(500).send({ msg: "Registration server error" });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: `Пользователь with email: ${email} не найден` })
        }
        const validPassword = await hash.comparePassword(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ msg: `Введен неверный пароль` })
        }
        const token = generateAccessToken(user._id, user.roles)
        return res.status(200).send({
            token: token,
            user: {
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
                
            },
            msg: "Login successful",
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: 'Login error' })
    }
}
);

router.get("/auth", authMiddleware, async (req, res) => {
    try {
        const { id } = req.user;
        const user = await User.findOne({ _id: id }).select("_id name email role");

        const token = generateAccessToken(user._id, user.roles);
        res.status(201).send({
            token,
            user,
        })

    } catch (e) {
        console.error(e);
        res.status(403).send({ msg: "Server error" });
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;

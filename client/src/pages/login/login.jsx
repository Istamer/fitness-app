import React, { useCallback, useState } from "react";
import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import appRoutes from "../../appRoutes";
import { useDispatch } from "react-redux";
import client from "../../api";
import { setUser } from "../../store/userSlice";

const Login = ({ setLoginUser }) => {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleChange = e => {
        const { name, value } = e.target
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    };

    const dispatch = useDispatch();


    const onShowPasswordClick = useCallback(() => {
        setShowPassword(prev => !prev);
    }, []);

    const login = () => {
        const { email, password } = loginForm
        if (email && password) {
            client.post("auth/login", loginForm)
                .then(res => {
                    alert(res.data.message)
                    dispatch(setUser(res.data.user));
                    localStorage.setItem("TOKEN", res.data.token);
                    navigate("/");
                }).catch(e => {
                    console.log(e);
                    alert("Login Error");
                })
        }
    }

    return (
        <div className="login">
            {console.log(loginForm)}
            <h1>Login Blyat</h1>
            <input type="text" name="email" value={loginForm.email} onChange={handleChange} placeholder="Enter your email" />
            <div className="password-block">
                <input type={showPassword ? "text" : "password"} name="password" value={loginForm.password} onChange={handleChange} placeholder="Enter your password" />
                <button onClick={onShowPasswordClick}>
                    {
                        showPassword ? "🥸" : "🤓"
                    }
                </button>
            </div>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <Link className="button" to={appRoutes.registration.path} replace>Register</Link>
        </div>
    )
}

export default Login
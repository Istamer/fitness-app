const express = require('express');
const cors = require("cors");
const authRouter = require('./routes/auth');
const PORT = 5000;

const app = express();


//connect with database
require("./database");
app.use(cors());
app.use(express.json())
app.use(express.urlencoded());

//your routes
app.use("/auth", authRouter);
app.get("/", (req,res)=>{
    res.json({message: "Express test"})
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

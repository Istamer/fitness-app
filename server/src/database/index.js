const mongoose = require('mongoose')

const dbName = "UsersDB"
const dbURL = `mongodb://127.0.0.1:27017/${dbName}`;

mongoose.connect(dbURL)
    .then(() => { console.log("Connected to database " + dbName) })
    .catch(e => { console.log(e) });



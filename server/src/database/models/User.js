const {Schema, SchemaTypes, model} = require('mongoose');

const UserSchema = Schema({
    name:{
        type: SchemaTypes.String,
        required: true,
    },
    email:{
        type: SchemaTypes.String,
        required: true,
        unique: true,
    },
    password:{
        type: SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
    role: {
        type: SchemaTypes.String,
        required: true,
        default: "USER"
    },
});

module.exports = model('users', UserSchema);
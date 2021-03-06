const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

var userSchema = new Schema({
    email: { type: String, required: true, unique: true},
    password: String
});

userSchema.plugin(uniqueValidator)
const User = mongoose.model('User', userSchema)

module.exports = User
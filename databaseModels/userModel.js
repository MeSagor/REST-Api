const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    "email": String,
    "password": String
})

const Users = mongoose.model('user', userSchema)

module.exports = Users
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "birthday": String,
    "blood": String,
    "hometown": String,
    "phone": String
})

const Contacts = mongoose.model('contact', contactSchema)

module.exports = Contacts
const express = require('express')
const Contacts = require("../databaseModels/contactModel");
const {authCheker} = require('./authentication')
const Router = express.Router()
Router.use(express.json())


Router.get('/', authCheker, (req, res) => {
    Contacts.find()
        .then((result) => {
            res.json({
                "message": "All Contacts are...",
                result
            })
        })
        .catch((err) => {
            res.json({
                "message": "Error occurs...! Can\'t find Contacts...",
                err
            })
        })
})

Router.post('/', authCheker, (req, res) => {
    const contact = new Contacts(req.body)

    contact.save()
        .then((result) => {
            res.json({
                message: 'Contact created successfully',
                result
            })
        })
        .catch((err) => {
            res.json({
                message: 'Contact not created',
                err
            })
        })
})


module.exports = Router
const express = require('express')
const mongoose = require('mongoose')
const contactsRouter = require('./routes/contactsRoute')
const {signinAuth, signupAuth} = require("./routes/authentication");
const Users = require("./databaseModels/userModel");
require('dotenv').config()

const app = express()
app.use(express.json())


mongoose.connect(process.env.DB_URL)
    .then((result) => {
        console.log('Database connected successfully...')
        app.listen(3000, () => {
            console.log('Server in running....')
        })
    })
    .catch((err) => {
        console.log('Error occurs...!')
    })


app.get('/', (req, res) => {
    res.send('HOME')
})


app.post('/signup', signupAuth, (req, res) => {
    const user = new Users({
        email: req.body.email,
        password: req.body.password
    })

    user.save()
        .then((result) => {
            res.json({
                message: 'User created successfully',
                result
            })
        })
        .catch((err) => {
            res.json({
                message: 'User not created',
                err
            })
        })
})


app.post('/signin', signinAuth, (req, res) => {
    res.json({
        "message": "Login Successful",
        "access_token": req.body.token
    })
})


app.use('/contacts', contactsRouter)


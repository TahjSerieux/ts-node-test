const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

//Cretes Express app i.e. server
const app = express()

//Middleware
const userRoutes = require('./routes/userAuthorizationRoutes')
const userProfileRoutes = require('./routes/userProfileRoutes')

//parses request and deciphers json body
app.use(express.json())

const repeatInterval = setInterval(()=>{
    console.log("Connecting to Database...")
},1000)

//COnnect to the databse before starting the server
//connects to the mongo db database by the uri

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{
//     //once connected the app begins to listen to the port, starting the server
//     app.listen(process.env.PORT,()=>{
//         clearInterval(repeatInterval)
//         console.log(`Connected to port: ${process.env.PORT}`)
//     })
// })
// .catch((error)=>{
//     console.log(error)
// })
app.listen(process.env.PORT,()=>{
    clearInterval(repeatInterval)
    console.log(`Connected to port: ${process.env.PORT}`)
})
//Handles are routes starting with /user
//Route handle handled by userRoutes.js
app.use('/user/profile', userProfileRoutes)
app.use('/user', userRoutes)
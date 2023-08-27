const express = require('express')

const router = express.Router()

const {loginUser, signupUser} = require('../controllers/userAuthorizationController')

//handles the POST routes for the url '/user/login'
//route handler is loginUser which is imported from userController.js
router.post('/login', loginUser)

//handles the POST routes for the url '/user/signup'
//route handler is signupUser which is imported from userController.js
router.post('/signup', signupUser)

module.exports = router

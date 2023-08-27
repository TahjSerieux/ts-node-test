const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const {getPosts} = require('../controllers/userProfileController')
const router = express.Router()


//Require Authentication for routes
// router.use(requireAuth)

router.get('/:id',getPosts)


module.exports = router


const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')
// this can be used to guard certain routes behind having to have a jwt/ ie being logged in
const requireAuth = async (req, res, next) =>{
    const {authorization} = req.headers
    
    if(!authorization)
    {
        return res.status(401).json({error:'Authorization token required'})

    }
    
    const token = authorization.split(' ')[1]

    try {
        // deciphers the token by using the secret key in the .env file
        const {_id} = jwt.verify(token,process.env.SECRET)
        //gets the user witht he matching _id and only returns the _id value with select('_id")
        // saves the id to a user key
        req.user_id =  await userModel.findOne({_id}).select('_id')
        next()
    } catch (error) {
        res.status(401).json({error:'Request not authorized'})
    }


}

module.exports = requireAuth
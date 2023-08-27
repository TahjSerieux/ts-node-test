
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

//function to create a json web token
const createtoken = (_id,firstName) =>{
    // creates a json webtoken with the users id and firstname in the payload
  return jwt.sign({_id, firstName}, process.env.SECRET, { expiresIn: '10h' })

}
//Route handler that handles loging  users int
const loginUser = async (req,res)=>{
    const{Email, Password} = req.body

    try {
        //Static function fo the userModel class
        const user = await userModel.login(Email, Password)
        //destructures the the values from the updated 
        const {Email: email, First_Name: firstName, Last_Name: lastName} = user.User
        //generatesa  token
        const token = createtoken(user._id, firstName)
        //sends an object containing the firstname, email and token 
        res.status(200).json({firstName, email, token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }    
}

const signupUser = async (req, res) => {
    const User = req.body.User
    // console.log(req.body)
    const {Email,Password,First_Name,Last_Name} = req.body

  
    try {
        // tries to sign the user up
      const user = await userModel.signup({Email,Password,First_Name,Last_Name}); // Add "await" keyword here
      const {Email: email, First_Name: firstName, Last_Name: lastName} = user.User
    //   genreates a jwt token
      const token = createtoken(user._id, firstName)
    //   returns the firstname, email and jwt token to the client
      res.status(200).json({firstName, email, token,user_id:user._id})

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = {loginUser, signupUser}
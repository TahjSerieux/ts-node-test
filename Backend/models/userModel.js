
/**COLLECTION 1 [Users]
Base Level Object [User]
this will be the base level document containing first and last name with an attached ID that will we
utilized in other collections to keep information tidy and connected. */
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const Schema = mongoose.Schema

const userInfoSchema = new Schema({
    User:{
        First_Name:{
            type:String,
            required:true
        },
        Last_Name:{
            type:String,
            required:true
        },
        Email:{
            type: String,
            required: true
        },
        Password:{
            type:String,
            required:true
        }
    },
    Session:{
        session_id:{
            type:String,
            required:true
        },
        login_time:{
            type:Date,
            required:true
        },
        logout_time:{
            type:Date,
            required:false
        }
    },
    Valid_from:{
        type:Date,
        required: false

    },
    Valid_to:{
        type:Date,
        required: false

    }

},{timestamps:true})
var generate_key = function() {
    // 16 bytes is likely to be more than enough,
    // but you may tweak it to your needs
    return crypto.randomBytes(32).toString('base64');
};

userInfoSchema.statics.signup = async function(User){
    var datetime = new Date();
    //Checks if all user input fields are filled
    const {Email,Password,First_Name,Last_Name} = User
    if(!Email || !Password || !First_Name || !Last_Name)
    {
        throw Error("All fields must be filled")
    }
    
    //Checks in the databse if  the email is already being used i.e already in the database
    const exist = await this.findOne({'User.Email':Email})
    
    if(exist)
    {
        throw Error("Email already in use")
    }
    //Checks if the email is a valid email
    if(!validator.isEmail(Email))
    {
        throw Error('Invalid Email')
    }
    //checks if the password is strong enough
    if(!validator.isStrongPassword(Password))
    {
        throw Error("Password is too weak")
    }
    //Generates a salt
    const salt = await bcrypt.genSalt(10)
    //hashes the salt with the passowrd createing a unique string,
    //  even if there are multiplem passwords that are the same
    const hash = await bcrypt.hash(Password,salt)
    // creates an object representing the user
    const userObject = {User:{Email,Password:hash,First_Name,Last_Name},Session:{session_id:generate_key(),login_time:Date.now()}}

    // adds the user to the database
    const user =  await this.create(userObject)
    // returns the user object
    return user

}

userInfoSchema.statics.login = async function (email, password){
   //checks if the email and password is not null
    if(!email || !password )
    {
        throw Error("All fields must be filled")
    }
    
    //Checks in the databse if the email is already being used i.e already in the database
    const user = await this.findOne({'User.Email':email})
    //If a user does not exist throw an error
    if(!user)
    {
        throw Error("Incorrect email")
    } 
    //Checks if the password provided matches the encrypted password stoed in the databse
    const match = await bcrypt.compare(password,user.User.Password)
    //Checks if the match is false
    if(!match)
    {
        // if the passwords do not match throw an error
        throw Error("Incorrect password")
    }
    ////upadtes the login time for the user
    const user_login_time_updated = await this.findOneAndUpdate({'_id':user._id},{'Session.login_time':Date.now()})
    //If there was an error updating throw an error
    if(!user_login_time_updated)
    {
        throw Error("Error logging in please try again later")
    }
    return user_login_time_updated
}
const userInfoModel = mongoose.model('Users', userInfoSchema)

module.exports = userInfoModel

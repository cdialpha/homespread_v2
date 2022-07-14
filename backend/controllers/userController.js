const asyncHandler = require("express-async-handler")
const User = require('../models/User')
const { genPassword, issueJWT } = require('../lib/passwordUtils');
const connectDB = require('../config/db');
const passport = require('passport'); 

const registerUser = asyncHandler(async (req,res, next) => {
    console.log(req.body)
    const { username, password } = req.body;
    const saltHash = genPassword(password)
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    
    //first check to see if user exists 
    const checkExistingUser = await User.findOne({username});
    if(checkExistingUser) {  
        res.status(400)
        throw new Error("User already exists")
    } 

    //if user doesn't exist, then create usign shcema and issue jwt
    else { 
        const newUser = await User.create({
            username,
            hash,
            salt
        })
        .then((user) => {
            const jwt = issueJWT(user._id);
            res
                .status(201)
                .json({
                    _id: user._id,
                    username: user.name,
                    token: jwt.token, 
                })
        })
        .catch(err => next(err))
    };
});


module.exports = { 
    registerUser 
}

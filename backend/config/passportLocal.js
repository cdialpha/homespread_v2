// const User = require('../models/User')
// const LocalStrategy = require('passport-local').Strategy;
// const passport = require('passport')
// const validPassword = require('../lib/passwordUtils').validPassword

// const customFields = { 
//     usernameField: 'uname',
//     passwordField: 'pw',
// }

// const verifyCallback = (username, password, done) => {
//     console.log("start authentication!", username, password)
//     User
//         .findOne({ username: username})
//         .then((user) => {
//     if(!user){ return done(null,false)};
//     const isValid = validPassword(password, user.hash, user.salt);
//     console.log(password, user.hash, user.salt);
//     if(isValid){
//         console.log("it's valid!")
//         return done(null,user);
//     } else {
//         console.log("not valid!")
//         return done(null,false)
//     }
// })  
//     .catch((err) => {
//         done(err);
//     });
// };  

// const strategy = new LocalStrategy(customFields, verifyCallback)

// passport.use(strategy);

// // Grabs user from DB and attaches to the Req.Session object 
// passport.serializeUser((user, done) => {
//     done(null, user.id)
// })

// // Grabs user.id from database using Req.Session then makes the user object available to the app 
// passport.deserializeUser((userId, done) => {
//     User.findById(userId)
//         .then((user) => {
//             done(null, user);
//         })
//         .catch(err => done(err))
// });


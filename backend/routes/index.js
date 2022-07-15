const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controllers/userController');
const passport = require('passport')
// @desc    Dashboard 
// @route   POST /register 
 router.post('/register', registerUser);

// @desc     
// @route   POST /login 
router.post('/login', loginUser);


// @desc     
// @route   POST /login 
router.get('/protected', 
    passport.authenticate('jwt', {session: false}), 
    (req, res, next) => {
    res.status(200).json({ success: true, msg: 'you are authorized!'})
});

module.exports = router;

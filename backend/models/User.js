const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
    createdAt: {
        type: Date,
        default: Date.now, 
    },
});

module.exports = mongoose.model('User', UserSchema)
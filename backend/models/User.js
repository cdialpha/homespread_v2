const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    role: {
        type: String,
        enum: ["user", "chef", "both"],
        default: "user"  
    },
    hash: String,
    salt: String,
    createdAt: {
        type: Date,
        default: Date.now, 
    },
});

module.exports = mongoose.model('User', UserSchema)
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs'); 

const genPassword = (password) => {
    console.log(password, typeof(password));
    var salt = crypto.randomBytes(32).toString('hex'); 
    var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return {
        salt: salt,
        hash: genHash,
    };
}

const validPassword = (password, hash, salt) => {
    var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify
} 

const pathToKey = path.join(__dirname,'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

const issueJWT = (id) => {
    // const _id = user._id;
    const expiresIn ='1d'
    const payload = { 
        sub: id,
        iat: Date.now()
    };
    const signedToken = jwt.sign(payload, PRIV_KEY, 
        {expiresIn, algorithm: 'RS256' })
    return {
        token: "Bearer " + signedToken,
        expires: expiresIn, 
    }
};

module.exports = {
    issueJWT,
    validPassword,
    genPassword,
}
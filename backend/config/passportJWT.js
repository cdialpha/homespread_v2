const User = require('../models/User');
const fs = require('fs');
const path = require('path');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname, '../lib/','id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

// To DO 
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256'],
} ;

const JWTstrategy = new JwtStrategy(options, (payload, done) => {
    User.findOne({_id: payload.sub })
    .then((user) => {
        if(user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
    .catch(err => done(err , null)) 
});

module.exports = (passport) => {
    passport.use(JWTstrategy)
}


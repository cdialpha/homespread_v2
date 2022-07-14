const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors')
const colors = require('colors');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo');
const passport = require('passport')
const path = require('path');
const fs = require('fs');

//GEENERAL SETUP 
const app = express();
dotenv.config({path: './config/.env'});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV}Listening on port${PORT}`.cyan.underline));
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
connectDB();
if (process.env.NODE_ENV === 'development') { 
    app.use(morgan('dev'))
}
app.use(cors())

//SESSION SETUP 
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true, 
//     store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
//     cookie:{maxAge: 1000*60*60*24},
// }));
// app.use(passport.session());

//PASSPORT SETUP & INITIALIZATION 
require('./config/passportJWT')(passport);
app.use(passport.initialize());

app.use('/', require('./routes/index'))

app.use(express.static(path.join(__dirname, 'public')));


// Dependecies
const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect(`mongodb+srv://admin:${process.env.PASSWORD}@stugor-svqg5.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })
.then(()=> {
    console.log(`Connected.`);
})
.catch(err => console.error(err.stack))



// Routes
 let auth = require('./routes/auth');
 let users = require('./routes/users');
 let cabins = require('./routes/cabins');
 let bookings = require('./routes/bookings');
 let verify = require('./routes/verify');

const dbUrl =  "stugor-svqg5.mongodb.net/auth"
const dbUser = 'Alexandra';
const dbPass = '123';

let App = express();

App.use(express.json());
App.use(cors()); // Dev

App.route('/cabins')
.get(cabins.get)
.post(cabins.post)
.patch(cabins.patch)

App.route('/cabins/:cabinId')
.delete(cabins.delete)

App.route('/bookings')
.post(bookings.post)

App.route('/bookings/:bookingId')
.delete(bookings.delete)

App.route('/verify/:code')
.get(verify.get)

// ROUTES
App.route('/auth')
.post(auth.post)

App.route('/users')
.post(users.post)

App.route('/cabins')
.get(cabins.get)

// Auth Middleware
App.use((req, res, next) => {

    console.log(req.headers);

    if(auth.verifyToken(req.headers.authorization)){
        next()
    } else {
        res.status(403).send('Access Denied.')
    }

})



const PORT = 3000;
App.listen(PORT, () => {
    console.info(`API up n running on port ${PORT}.`);
})

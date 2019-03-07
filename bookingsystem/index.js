// Dependecies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect(`mongodb+srv://admin:${process.env.PASSWORD}@stugor-svqg5.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })
.then(()=> {
    console.log(`Connected.`);
})
.catch(err => console.error(err.stack))

    

// Routes
 let cabins = require('./routes/cabins');
 let bookings = require('./routes/bookings');
 let verify = require('./routes/verify');

let app = express();

app.use(express.json());
app.use(cors()); // Dev

app.route('/cabins')
.get(cabins.get)
.post(cabins.post)

app.route('/bookings')
.post(bookings.post)

app.route('/verify/:code')
.get(verify.get)



const PORT = 3000;
app.listen(PORT, () => {
    console.info(`API up n running on port ${PORT}.`);
})

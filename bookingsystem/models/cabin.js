const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cabinSchema = new Schema({      
    name: String,
    where: {
        city: String,
        adress: String
    },
    date: {
        from: String,
        to: String,
        checkin: Number,
        checkout: Number
    },
    info: String,
    price: Number,
    cabins: {
        available: Number,
        unavailable: Number
    }
})

let Cabin = mongoose.model('cabin', cabinSchema);

module.exports = Cabin;
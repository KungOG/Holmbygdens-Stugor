const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cabinSchema = new Schema({
    name: String,
    picture: String,
    where: {
        city: String,
        adress: String
    },
    date: {
        from: String,
        to: String,
        checkin: String,
        checkout: String
    },
    info: String,
    price: Number,
    cabin: {
        available: Number,
        unavailable: Number
    }
})

let Cabin = mongoose.model('cabin', cabinSchema);

module.exports = Cabin;

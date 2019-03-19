const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bookingSchema = new Schema({
    cabin: Object,
    code: String
})

let Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking;
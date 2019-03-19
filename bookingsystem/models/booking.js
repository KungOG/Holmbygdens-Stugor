const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bookingSchema = new Schema({
    cabin: Object,
    code: String
})

let Booking = mongoose.model('eBooking', bookingSchema);

module.exports = Booking;
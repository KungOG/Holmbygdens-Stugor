const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bookingSchema = new Schema({
    cabin: Object,
    code: String,
    used: { type: Boolean, default: false }
})

let Booking = mongoose.model('eBooking', bookingSchema);

module.exports = Booking;
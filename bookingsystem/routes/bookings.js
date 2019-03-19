// bookings

// model
let Booking = require('../models/booking');
let Cabin = require('../models/cabin');

// POST
module.exports.post = async (req, res) => {
    console.log(req.body);
    try {
        let cabin = await Cabin.findById(req.body.cabin);
            let eBooking = [];

            for(i = 0; i < req.body.amount; i++) {
                let booking = {
                    cabin: cabin,
                    code: uid(5),
                }
                eBooking.push(booking);
            }

            // write bookings to Mongo
            let resp = await Booking.create(eBooking);

            // Send to FrontEnd
            res.status(200).send(resp);

    } catch(err) {
        res.status(404).send(err.stack);
    }
}


/* När vi behöver avboka en bokning */
module.exports.delete = async (req, res) => {
    
    try {
        res.status(200).send( await Cabin.findOneAndDelete({_id: req.params.bookingId}));
    } catch(err) {
        res.status(404).send(err.stack);
    }
}

function uid(len){

    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    let Arr = [];

    for(let i=0; i<len; i++){
        Arr.push(chars[Math.floor(Math.random()*chars.length)]);
    }

    return Arr.join('');
};

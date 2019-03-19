// bookings

// model
let Booking = require('../models/booking');
let Cabin = require('../models/cabin');
let auth = require('./auth');

// POST
module.exports.post = async (req, res) => {

    try {

        let booking = {
            cabin: req.body.cabin,
            code: uid(5),
        }
        // write bookings to Mongo
        let resp = await Booking.create(booking);

        // Send to FrontEnd
        res.status(200).send(resp);

    } catch(err) {
        res.status(404).send(err.stack);
    }
}
module.exports.get = async (req, res) => {

    try {

        res.status(200).send( await Booking.find({}) );        
    
    } catch(err){
    
        res.status(500).send(err.stack);
    
    }

}

/* När vi behöver avboka en bokning */
module.exports.delete = async (req, res) => {
    
    try {

        // Kolla om användaren är admin
        if(auth.verifyToken(req.headers.authorization)){

            res.status(200).send( await Cabin.findOneAndDelete({_id: req.params.bookingId}));

        }
    
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

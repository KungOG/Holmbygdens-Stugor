// Bookings
// model
let Booking = require('../models/booking');
// GET
module.exports.get = async (req, res) => {
    try {
    
        let booking = await Booking.find({ code: req.params.code });
       
        if(booking.length == 1){
            console.log('Du har precis verifierat en bokning!')
            res.status(200).send({ msg: booking[0], verified: true });
        } else {
            console.log('Du har precis försökt verifierat en bokning, men misslyckat!')
            res.status(200).send({ msg: ' is NOT valid.', verified: false })
        
        }
    } catch(err) {
        console.error(err)
        res.status(500).send(err);
    }
}

// Bookings

// model
let Booking = require('../models/booking');

// GET
module.exports.get = async (req, res) => {

    try {

        let booking = await Booking.find({ code: req.params.code});

        if(booking.length == 1 && booking[0].used == false){
            
            res.status(200).send({ msg: `Booking is valid for cabin: ${booking[0].cabin.name}.`, verified: true });
    
            // uppdaterar biljett till used
            await Booking.findOneAndUpdate({ code: req.params.code },{
                used: true
            });

        } else {
        
            res.status(200).send({ msg: ' is NOT valid.', verified: false })
        
        }

    } catch(err) {
        console.error(err)
        res.status(500).send(err);
    }

}

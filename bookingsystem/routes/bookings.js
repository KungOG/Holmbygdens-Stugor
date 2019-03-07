// TICKETS

// model
let Booking = require('../models/booking');
let Cabin = require('../models/cabin');

// GET
module.exports.get = async (req, res) => {
    
    try {

        res.status(200).send( await Ticket.find({}) );        
    
    } catch(err){
    
        res.status(500).send(err.stack);
    
    }
}

// POST
module.exports.post = async (req, res) => {
    
    try {

        // Finns stugor? Får min beställning plats?
        // Uppdatera cabin med sålda biljetter

        // get cabin info
        let cabin = await Cabin.findById(req.body.cabin);

        if(cabin.bookings.available >= (cabin.bookings.sold + req.body.amount)){
            // Finns biljetter kvar!
            console.info('Cabins are available!');

            // Uppdatera cabin > sold tickets
            let newSold = cabin.bookings.sold + req.body.amount;

            await Cabin.findOneAndUpdate({ _id: req.body.cabin}, {
                tickets: {
                    sold: newSold,
                    available: event.tickets.available    
                }
            });

            // Skapa biljetter och skicka tillbaka till FE
            let bookings = [];

            for(i=0; i<req.body.amount; i++){

                let booking = {
                    booking: booking,
                    code: uid(5),
                    used: false
                }

                bookings.push(booking);
            }

            // write tickets to Mongo
            let resp = await Booking.create(bookings);

            // Send to FrontEnd
            res.status(200).send(resp);

        } else {
            // Finns INTE biljetter kvar.
            console.info('Sorry, all cabins are sold.');
            res.status(200).send('Sorry, all cabins are sold.');
        }

    } catch(err) {
        res.status(500).send(err.stack);
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

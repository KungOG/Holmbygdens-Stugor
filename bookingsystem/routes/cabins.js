// Cabins
let auth = require('./auth');

// model
let Cabin = require('../models/cabin');

// GET
module.exports.get = async (req, res) => {

    try {

        res.status(200).send( await Cabin.find({}) );        
    
    } catch(err){
    
        res.status(500).send(err.stack);
    
    }

}

/* Här redigerar vi en gammal stuga ifall infon blivit fel eller liknande */
module.exports.patch = async (req, res) => {

    if( await auth.verifyToken(req.headers.authorization)){
    
        try { 
            console.log('Du lyckades med att redigera en stuga!')
            res.status(200).send(await Cabin.findOneAndUpdate({
                _id : req.body.cabin._id},
            {
                name : req.body.cabin.name,
                price: req.body.cabin.price,
                info: req.body.cabin.info,
                where: {
                    adress: req.body.cabin.where.adress,
                    city: req.body.cabin.where.city,
                },
                date : {
                    from : req.body.cabin.date.from,
                    to : req.body.cabin.date.to,
                },
                cabin : {
                    available : req.body.cabin.cabin.available,
                    unavailable : req.body.cabin.cabin.unavailable
                }
            }))

        
    } catch {
        res.status(404).send(err.stack);
    }
} else {
    res.status(500).send('ajbaja')
}
}

/* Här bygger vi en ny stuga ifall vi har fått en ny stuga */
module.exports.post = async (req, res) => {
    try {
        console.log('Du lyckades med att lägga till en stuga!')
        res.status(200).send( await Cabin.create(req.body));
        

    } catch(err) {
        res.status(404).send(err.stack);
    }
}

/* Här tar vi  bort en stuga som redan finns */
module.exports.delete = async (req, res) => {
    
    try {
        console.log('Du lyckades med att ta bort en stuga!')
        res.status(200).send( await Cabin.findOneAndDelete({_id: req.params.cabinId}));
    } catch(err) {
        res.status(404).send(err.stack);
    }
}
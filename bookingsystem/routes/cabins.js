// Cabins

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

// POST
module.exports.post = async (req, res) => {
    try {
        let newcabin = await Cabin.findById(req.body.cabin._id)

        if (newcabin){
            console.log('inne i if')
            
            await Cabin.findOneAndUpdate({_id : req.body.cabin._id},
                {
                    name : req.body.cabin.name,
                    price: req.body.cabin.price,
                    where : { 
                        adress: req.body.cabin.where.adress,
                        city: req.body.cabin.where.city
                    },
                    date : { 
                        from : req.body.cabin.date.from,
                        to : req.body.cabin.date.to
                    },
                    cabin : {
                        available : req.body.cabin.available,
                        unavailable : req.body.cabin.unavailable
                    }
                })
        }
        else {
            res.status(200).send( await Cabin.create(req.body));
        }

    } catch(err) {
        res.status(404).send(err.stack);
    }
}

// Delete a cabin from Admin site
module.exports.delete = async (req, res) => {
    
    try {
        res.status(200).send( await Cabin.findOneAndDelete({_id: req.params.cabinId}));
    } catch(err) {
        res.status(404).send(err.stack);
    }
}
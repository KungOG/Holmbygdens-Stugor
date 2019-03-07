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
        res.status(200).send( await Cabin.create(req.body));
    } catch(err) {
        res.status(500).send(err.stack);
    }
}
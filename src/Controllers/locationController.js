const Locations  = require("../models/locations");



//creating new location
exports.createLocations =  async (req, res) => {
    try {
        const locations = await Locations.create(req.body)
        res.status(201).send({ message: "Location created" });
        await locations.save();
    } catch (error) {
        if (error.code === 11000){
            res.status(409).send({error: error});
        }
        else {
            res.status(500).send({error: error});
        }
    };
}
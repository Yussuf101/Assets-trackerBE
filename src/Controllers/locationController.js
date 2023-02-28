const Locations  = require("../models/locations");



//creating new location
exports.createLocations =  async (req, res) => {
    try {
        const locations = await Locations.create(req.body)
        res.status(201).send({ message: "Location created" });
        await locations.save();
    } catch (error) {
        if (error.code === 11000){
            res.status(409).send({error: "Already exists!"});
        }
        else {
            res.status(500).send({error: "Error in adding new location"});
        }
    };
}

//-----------Finding a location--------------
exports.findLocation = async (req, res) => {
    
    try
    {
        const list = await Locations.findAll()
        res.status(200).send(list);
    }
    catch (error)
    {
        console.log(error)
    }
}

//------------------deleting a location ---------------

// --------------Deleting a user--------------
exports.deleteLocation = async (req, res) =>
{
    try
    {
        if (req.locations)
        {
            console.log(`${req.Locations.location_name}  deleted Location`);
            await Locations.destroy({ where: { Location_id: req.locations.location_id } })
            res.status(200).send(await Users.findAll());
        }
        else
        {
            console.log("Nothing to delete");
            res.status(400).send({ error: "request failed" });
        }
    } catch (e)
    {
        console.log("error can not delete the location");
        res.status(500).send({ error: "internal error" });
        console.log(e);
    }
};

//---------Editing location Name ---------------
exports.nameEdit = async (req, res) => {
    try{
        if(req.Locations && req.body.name) {
            await Locations.update({ name: req.body.name }, {
                where: {
                    Location_id: req.Locations.Location_id
                }
            });
            res.status(200).send(await Locations.findOne( { where:{Location_name: req.body.name} }));
        } else if (!req.body.name) {
            res.status(400).send({error: error});
        }
    } catch (error) {
        if(error.original.errno === 1062) {
            res.status(500).send({error: 1062});
    
        } else {
            res.status(500).send({error: "Failed to update Location"});
            console.log(error);
        }
    }
};
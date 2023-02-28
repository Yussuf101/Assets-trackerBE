const Computers  = require("../models/computers");



//creating new a computer 
exports.createComputers =  async (req, res) => {
    try {
        const newComputers = await Computers.create(req.body)
        res.status(201).send({ message: "new Computer created" });
        await newComputers.save();
    } catch (error) {
        if (error.code === 11000){
            res.status(409).send({error: "Already exists!"});
        }
        else {
            res.status(500).send({error: "Error in adding new location"});
        }
    };
}

//-----------Finding a computer --------------
exports.findComputer = async (req, res) => {
    
    try
    {
        const list = await Computers.findAll()
        res.status(200).send(list);
    }
    catch (error)
    {
        console.log(error)
    }
}


// --------------Deleting a computer --------------
exports.deleteComputer= async (req, res) =>
{
    try
    {
        if (req.Computers)
        {
            console.log(`${req.Computer.Asset_label}  deleted Location`);
            await Locations.destroy({ where: { Asset_id: req.Computers.Asset_id } })
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

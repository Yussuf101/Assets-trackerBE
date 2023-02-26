// CRUD operations using express and Sequalize
const Users = require("../models/users");
const bcrypt = require("bcrypt");
const { sequelize } = require("../config/database");
const jwt = require("jsonwebtoken");


//--------Creating/register/signup a new user------------------
exports.addUser = async (req, res) =>
{
    try
    {
        let newUser = await Users.create(req.body)
        const token = jwt.sign({ "user_id": newUser.user_id }, process.env.SECRET);
        res.status(201).send({ message: "new user is created", username: newUser.username, email:newUser.email, phone: newUser.phone,  token: token });
    } catch (error)
    {
        if (error.original.errno === 1062)
        {
            res.status(409).send({ error: "User already exists!" });
        }
        else
        {
            console.log(error)
            res.status(500).send({ error: "Error in creating Acount" });
        }
    };
}


//--------------- Login ------------------

exports.login = async (req, res) =>
{
    console.log(req.body)
    try
    {
        const user = await Users.findOne({ where: { username: req.body.username } })
        if (user)
        {
            const password_valid = await bcrypt.compare(req.body.password, user.password)
            if (password_valid)
            {
                const token = jwt.sign({ "user_id": user.user_id }, process.env.SECRET);
                res.status(200).json({ username: user.username, email:user.email, phone: user.phone, token: token });
            } else
            {
                res.status(400).json({ error: "Incorrect Password, please try again" });
            }
        } else
        {
            res.status(404).json({ error: "Acount does not exist, please register first" });
        }
    } catch (error)
    {
        console.log(error)
        res.status(400).send({ error: error.message });
    }
};


//------------ Find a user-----------------
exports.findUsers = async (req, res) => {
    
    try
    {
        const list = await Users.findAll()
        res.status(200).send(list);
    }
    catch (error)
    {
        console.log(error)
    }
}

// --------------Deleting a user--------------
exports.deleteUser = async (req, res) =>
{
    try
    {
        if (req.user)
        {
            console.log(`${req.user.username}  deleted Account`);
            await Users.destroy({ where: { user_id: req.user.user_id } })
            res.status(200).send(await Users.findAll());
        }
        else
        {
            console.log("Nothing to delete");
            res.status(400).send({ error: "request failed" });
        }
    } catch (e)
    {
        console.log("error can not deleter user");
        res.status(500).send({ error: "internal error" });
        console.log(e);
    }
};


//---------Editing Name, Email, phone  and Passwords---------------
exports.nameEdit = async (req, res) => {
    try{
        if(req.user && req.body.name) {
            await Users.update({ name: req.body.name }, {
                where: {
                    user_id: req.user.user_id
                }
            });
            res.status(200).send(await Users.findOne( { where:{name: req.body.name} }));
        } else if (!req.body.name) {
            res.status(400).send({error: `use the "username" key`});
        }
    } catch (error) {
        if(error.original.errno === 1062) {
            res.status(500).send({error: 1062});
    
        } else {
            res.status(500).send({error: "Failed to update username"});
            console.log(error);
        }
    }
};

//---------- edit emails---------------
exports.editEmail = async (req, res) => {
    try{
        if(req.user && req.body.email) {
             await Users.update({ email: req.body.email }, {
                where: {
                  user_id: req.user.user_id
                }
            });
            res.status(200).send(await Users.findOne({where: {email: req.body.email}}));
        } else if (!req.body.email){
            res.status(400).send({error: `use the "email" key`});
        }
    } catch (error) {
            if(error.original.errno === 1062) {
                res.status(500).send({error: 1062});
        
            } else {
                res.status(500).send({error: "Failed to update users email"});
                console.log(error);
            }
            
        }
};
// -------------edit password ------------------

exports.editPassword = async (req, res) => {
    try{
        if(req.user && req.body.password) {
            await Users.update({ password: req.body.password }, {
                where: {
                  user_id: req.user.user_id
                }
            });
            res.status(200).send(await Users.findOne({where: {password: req.body.password}}));
        } else if (!req.body.password){
            res.status(400).send({error: `use the "password" key`});
        }
    } catch (error) {
        res.status(500).send(console.log("Failed to update password"));
        console.log(error);
    }
};
// --------------- edit phone--------------------

exports.editPhone = async (req, res) => {
    try{
        if(req.user && req.body.phone) {
            await Users.update({ phone: req.body.phone }, {
                where: {
                  user_id: req.user.user_id
                }
            });
            res.status(200).send(await Users.findOne({where: {user_id: req.user.user_id}}));
        } else if (!req.body.phone){
            res.status(400).send({error: `use the "phone" key`});
        }
    } catch (error) {
        res.status(500).send(console.log("Failed to update phonenumber"));
        console.log(error);
    }
};

// Listing users 
exports.listUsers = async (req, res) =>{
    try {
        const userList = await Users.findAll({});
        console.log("inside userList");
        res.status(200).send(userList);
    } catch (error) {
        res.status(500).send({error:"internal server error"})
        console.log(error)
    }
}






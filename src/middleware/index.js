const bcrypt = require("bcrypt");
const Users = require("../models/users");
const jwt = require("jsonwebtoken");

// encrypting the passwords via hashing 
const hashPassword = async (req, res, next) => {
    try {
        if ("password" in req.body) {
            const hashedPassword = await bcrypt.hash(req.body.password, 8)
            req.body.password = hashedPassword
            next()
        } else {
            throw new Error("Please provide a correct Password")
        }
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

// creating the Toke for verifications

const tokenCheck = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.SECRET);
        
        const user = await Users.findOne({where: {user_id: decoded.user_id}});

        if (!user){
            throw new Error("User does not exist")
        }

        req.user = user
        next()

    } catch (error) {
        res.status(403).send({ error: "Please log in" });
    }
};

module.exports = {
    tokenCheck,
    hashPassword
}
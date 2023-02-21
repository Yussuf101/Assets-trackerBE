// CRUD operations using express and Sequalize
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { sequelize } = require("../config/database");
const jwt = require("jsonwebtoken");


//Creating a new user
exports.createUser = async (req, res)=>{
    try{
        if (req.body.name && req.body.email && req.body.password){
            console.log(req.body)
            const newUser = new User(req.body);
            const token = await newUser.generateAuthToken();
            await newUser.save();
            res.status(201).send({user: newUser.name, token})
        }else{
            console.log("Please enter Name, Email and or Password")
            res.status(400).send({error:" need name, email and password entered please"})
        }
    }catch(error){
        if (error.code === 10000){
            res.status(409).send({error:"Email is already registered"})
        }else{
            console.log("error in creating User")
            res.status(500).send({error:"Internal Server error"})
            console.log(error)
        }
    }
}

// Login 
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const User = await User.filterByCredentials(email, password)
        const token = User.generateAuthToken()
        res.status(200).send({ name : User.name, token });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}


// Find a user
exports.findUser = async (req, res) => {
    try{
      const token = req.header("Authorization").replace("Bearer ", "");
      const decoded = jwt.verify(token, process.env.SECRET);
      const User = await User.findById(decoded._id);
      res.status(200).send({ name: User  });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message });
    }
  }

// Delete a user
exports.userDelete = async (req, res) => {
    try {
        if (req.User) {
        await User.findByIdAndDelete({ _id : req.user._id })
        res.status(200).send("User account is deleted")
        } else {
            console.log("login Please")
            res.status(400).send({error: "request failed, login please"})
        }
    } catch (error) {
        console.log("error in deleting user")
        res.status(500).send({error:"internal server error"})
        console.log(error)
    }
}


//Editing Name, Email and Passwords
exports.nameEdit = async (req, res) => {
    try{
        if(req.User) {
            await User.findByIdAndUpdate({ _id : req.user._id } ,{ $set : {name: req.body.name} })
            res.status(200).send(await User.find({name: req.body.name}))
        } 
    } catch (error) {
            res.status(400).send(console.log("User update failed, please try again"))
            console.log(error)
    }
}

// edit emails
exports.emailEdit = async (req, res) => {
    try{
        if(req.User) {
            await User.findByIdAndUpdate({_id : req.user._id} ,{ $set : {email: req.body.email} })
            res.status(200).send(await User.find({email: req.body.email}))
        } 
    } catch (error) {
            res.status(400).send(console.log("User update failed, please try again"))
            console.log(error)
    }
}

// edit password
exports.passwordEdit = async (req, res) => {
    try{
        if(req.User) {
            await User.findByIdAndUpdate({_id : req.user._id} ,{ $set : {password: req.body.password} })
            res.status(200).send(await User.find({password: req.body.password}))
        } 
    } catch (error) {
            res.status(400).send(console.log("User update failed, please try again"))
            console.log(error)
    }
}


// Listing users 
exports.ListUsers = async (req, res) =>{
    try {
        const userList = await User.findAll({});
        res.status(200).send(userList);
    } catch (error) {
        res.status(500).send({error:"internal server error"})
        console.log(error)
    }
}
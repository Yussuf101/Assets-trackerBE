require('dotenv').config();
const express = require('express');
const { connection } = require("./config/database");
const cors = require("cors")
const app = express();

// database models
const Users = require("./models/users");
const locations = require("./models/locations");
const Computers = require("./models/computers");
const Cable_Connectors = require("./models/cable_connectors");
const Monitors = require("./models/monitors");
const Network_Equipments = require("./models/network_equipments");
const Peripherals = require("./models/peripherals");
const { tokenCheck } = require('./middleware/index');
const { addUser, userDelete, login, nameEdit, emailEdit, passwordEdit, findUsers } = require("./Controllers/userController");

// Routes
const usersRoutes = require("./routes/userRoutes");
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(usersRoutes);



app.get("/api",  (req, res)=>{
    res.send({message:"Assets Tracker Api is working"})
});
app.get("/user/login", login, (req, res)=>{
    res.send({message:"Login Here please"})
});

app.get("/user", findUsers, (req, res)=>{
    res.send({message:"Here is the list of users"})
});


app.listen(port, async()=>{
    console.log( `Server is running on port ${port}, everything is working well`)
    // connection.authenticate();
    // await Users.sync({alter:true});
    // await locations.sync({alter:true});
    // await Cable_Connectors.sync({alter:true});
    // await Monitors.sync({alter:true});
    // await Network_Equipments.sync({alter:true});
    // await Peripherals.sync({alter:true});
    // await Computers.sync({alter:true});
    console.log("HTTP Server Started");
});

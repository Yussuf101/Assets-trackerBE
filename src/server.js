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



const port = process.env.PORT || 5000


app.get("/api", (req, res)=>{
    res.send("Assets Tracker Server")
});


app.listen(5000,()=>{
    console.log( `Server is running on port ${port}, everything is working well`)
    connection.authenticate();
    console.log("HTTP Server Started");
});

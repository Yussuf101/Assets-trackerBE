const express = require('express');
const app = express();

const port = process.env.PORT || 5000


app.get("/api", (req, res)=>{
    res.send("Assets Tracker Server")
});


app.listen(5000,()=>{
    console.log( `Server is running on port ${port}`)
});

const axios = require("axios");
const express = require("express");
const cors = require('cors')
const port = process.env.PORT || 8080;


const app = express();

app.use(cors())
app.use(express.json());


app.get("/api", (req, res) =>{
    res.send("it is working")
})



app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})
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


app.post("/api/webhook", (req, res) => {
    console.log("Webhook received:", req.body);

    // Always respond quickly with a 200 status to acknowledge the webhook
    res.status(200).send("Webhook received successfully!");
});

// Route to simulate an action in your app (e.g., user sign-up)
app.post("/api/user/signup", async (req, res) => {
    const userData = req.body;

    try {
        // Send the data to HubSpot webhook endpoint
        await axios.post("https://api-na1.hubapi.com/automation/v4/webhook-triggers/48785164/bRdz89z", userData);

        res.status(200).send("Data sent to HubSpot webhook successfully!");
    } catch (error) {
        console.error("Error sending webhook to HubSpot:", error.response.data);
        res.status(500).send("Failed to send data to HubSpot webhook.");
    }
});




app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})
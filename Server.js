const express = require('express');
const app = express();

// This allows your server to read the JSON data sent by AdsGalaxy
app.use(express.json());

// A simple home route so you can test if the server is alive in your browser
app.get('/', (req, res) => {
    res.send('AdsGalaxy Callback Server is running!');
});

// This is your specific Callback URL endpoint
app.post('/adsgalaxy/callback', (req, res) => {
    console.log("🔔 Received callback from AdsGalaxy!");
    
    // This will print the exact JSON data you showed me earlier
    console.log(req.body); 

    /*
    ========================================================
    IMPORTANT: THIS IS WHERE YOU WILL ADD YOUR LOGIC LATER.
    When you are ready, you will add code here to:
    1. Check if req.body.status === "completed"
    2. Check if req.body.event_id is already in your database (anti-cheat)
    3. Give points to req.body.user_id
    ========================================================
    */

    // You MUST return a 200 OK status so AdsGalaxy knows you received it successfully
    res.status(200).json({ status: "success" });
});

// Render will provide a port automatically, otherwise use 3000 for local testing
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
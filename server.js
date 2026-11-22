const express = require('express');
const app = express();

app.use(express.json());

// Your callback endpoint
app.post('/adsgalaxy/callback', (req, res) => {
    console.log("🔔 Received callback from AdsGalaxy!");
    console.log(req.body); 
    res.status(200).json({ status: "success" });
});

// ✅ Export the app for Vercel
module.exports = app;

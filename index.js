const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


const http = require('http');
const server = http.createServer(app);


app.get('/', (req, res)=> {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <title>Server Status</title>
    <style>
        body {
        background-color: #f0f0f0;
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        }

        .container {
        background-color: #fff;
        padding: 30px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        text-align: center;
        }

        h1 {
        color: #333;
        }

        p {
        color: #555;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h1>Server is Running</h1>
        <p>Your index.js file is running successfully!</p>
    </div>
    </body>
    </html>`);
});

//connection to MongoDB

mongoose.connect("mongodb+srv://jeimariepedraya:wlan616c4f_@expressnodedb.8r7v0.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => {
        console.error("MongoDB Connection Error: ", error.message);
    });


//middleware

app.use(cors());
app.use(express.json());

//import API folder

const submitBookReqForm = require('./API/submit');

//use API

app.use("/submit", submitBookReqForm);

/* start the server locally

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

*/


// start the server microsoft azure

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})



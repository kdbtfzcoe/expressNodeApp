const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


const http = require('http');
const server = http.createServer(app);

app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.get('/', (req, res)=> {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website</title>
    <style>/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    font-family: 'Courier new', monospace;
    line-height: 1.6;
    color: #333;
}

/* Hero Section */
.hero-section {
    background: url('/assets/image.jpg') no-repeat center center;;
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
}

.hero-content {
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    padding: 20px 40px;
    border-radius: 10px;
}

.hero-title {
    font-size: 3rem;
    font-family: 'CustomFont', 'Segoe Script', cursive;
    margin-bottom: 10px;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.hero-button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #f5c531;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.hero-button:hover {
    background-color: #d4a622;
}

/* About Section */
.about-section {
    padding: 50px 20px;
    background-color: #f8ecd5;
    text-align: center;
}

.about-content h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.about-content p {
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto;
}

/* Form Section */
.form-section {
    padding: 50px 20px;
    background-color: #ffffff;
}

.form-card {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f8ecd5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.form-card h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.form-card p {
    margin-bottom: 20px;
    font-size: 1rem;
    color: #666;
}

form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #cccccc;
    border-radius: 5px;
}

form button {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    color: #fff;
    background-color: #f5c531;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

form button:hover {
    background-color: #d4a622;
}

/* Footer */
.footer {
    text-align: center;
    padding: 20px;
    background-color: #333;
    color: #fff;
}
</style>
</head>
<body>
    <!-- Hero Section -->
    <header class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title">Sunnies and Skies</h1>
            <p class="hero-subtitle">Welcome to your online library for book lovers!</p>
            <button class="hero-button">Explore Now</button>
        </div>
    </header>

    <!-- About Section -->
    <section class="about-section">
        <div class="about-content">
            <h2>About Us</h2>
            <p>
                Sunnies and Skies is an online library designed to make book requests and access seamless. 
                Whether you're a student, a bookworm, or a casual reader, we're here to meet your literary needs.
            </p>
        </div>
    </section>

    <!-- Book Request Form Section -->
    <section class="form-section">
        <div class="form-card">
            <h2>Book Request Form</h2>
            <p>Fill out the details below to request a book.</p>
            <form>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <input type="text" placeholder="Book Title" required>
                <input type="text" placeholder="Author Name" required>
                <button type="submit">Submit Request</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2024 Sunnies and Skies. All Rights Reserved.</p>
    </footer>
</body>
</html>
`);
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



const express = require("express");
const router = express.Router();
const Form = require("../Models/bookReqForm"); // Import the Mongoose model

router.post("/", async (req, res) => {
    const { name, age, email, address, bookGenre, bookTitle, bookAuthor, yearOfPublication } = req.body;

    try {
        // Create a new form document
        const formEntry= new Form({
            name,
            age,
            email,
            address,
            bookGenre,
            bookTitle,
            bookAuthor,
            yearOfPublication,
        });

        const savedEntry = await formEntry.save();


        console.log("Saved Data:", savedEntry);

        // Respond to the client
        res.status(201).json({ message: "Form Submitted Successfully", data: savedEntry});
    } catch (error) {
        console.error("Error saving form data:", error);

        if (error.code === 11000){
            res.status(400).json({ message: "Email already exists!"});
        } else {
            res.status(500).json({ message: "Error saving form data." });
        }
    }
});

module.exports = router;

/*
const express = require("express");
const router = express.Router();

router.post("/", (req, res)=> {
    const {name, age, email, address, bookGenre, bookTitle, bookAuthor, yearOfPublication} = req.body;

    console.log("Received Data:", {name, age, email, address, bookGenre, bookTitle, bookAuthor, yearOfPublication});

    res.status(200).json({message: " form Submitted Successfully"});
});

module.exports = router;

*/
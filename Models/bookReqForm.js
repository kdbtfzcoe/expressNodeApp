const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true }, 
    address: { type: String, required: true },
    bookGenre: { type: String, required: true },
    bookTitle: { type: String, required: true },
    bookAuthor: { type: String, required: true },
    yearOfPublication: { type: Number, required: true },
});

module.exports = mongoose.model("Form", FormSchema);


/* class FormModel {
    constructor(name, age, email, address, bookGenre, bookTitle, bookAuthor, yearOfPublication){
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.bookGenre = bookGenre;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.yearOfPublication = yearOfPublication;
    }
}

module.exports = FormModel;

*/
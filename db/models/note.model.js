// Naming of file should be singular noun
/*
    Creating a model:
    1. Create the schema
    2. Create the model using the schema
*/

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: String,
    link: String,
});

module.exports = mongoose.model("Note", noteSchema);

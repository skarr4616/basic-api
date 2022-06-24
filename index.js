const { response } = require('express');
const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const { notesRouter } = require("./api/v1/index");
require('./db/db');

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

// We are using router to make files more managable and modular 
// root (/)
app.get('/', (request, response) => {
    response.send('Hello World!');
})

// notes (/notes)
// the '/' shown below is the router root, different from app root

app.use("/notes", notesRouter);

app.listen(port, () => {
    console.log(`Notes backend app running on port http://localhost:${port}`);
 })
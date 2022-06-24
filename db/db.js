const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/notes-db", {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
// });

const {
    DB_URL,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME
} = process.env;

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}/${DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    // We are connected!
    console.log("db is now connected");
});
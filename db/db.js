const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/notes-db", {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
// });

mongoose.connect("mongodb+srv://Skarr:rhGRUVMWnuy7gnlh@cluster0.k67mdzd.mongodb.net/notes-db?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    // We are connected!
    console.log("db is now connected");
});
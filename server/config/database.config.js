const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Issue in db connection", err.message);

        // Find oy the meaning of this
        // means process with some kind of failure
        process.exit(1);
    });
}


// export the db
module.exports = dbConnect;
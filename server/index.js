const express = require('express');

const app = express();


// load config from env file
require('dotenv').config();

const PORT = process.env.PORT || 3000


// middleware to parse json request body
app.use(express.json());

// import routes for todo api
const todoRoutes = require("./routes/todo.routes")

// mount the todo API routes
app.use("/api/v1", todoRoutes);


// start the server
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});


// connect to the database
const dbConnect = require("./config/database.config")

dbConnect();

// default routes
app.get("/", (req,  res) =>{
    res.send(`<h1>Welcome to the Todo APP </h1>`);
})
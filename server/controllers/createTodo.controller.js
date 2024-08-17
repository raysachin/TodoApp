
// import the model
const Todo = require("../models/todo.models")

// Define Route handlers.
// You are here because you have  hit a route definitely

exports.createTodo = async(req, res) =>{
    try {
        // Extract the title and description from body of request because user send it from there
        const { title, description } = req.body;

        // It will create an object of Todo and add title and decsription inside the object and insert it to the database
        const response = await Todo.create({title, description});

        // send json response with success flag
        res
        .status(200)
        .json(
            {
                succcess: true,
                data: response,
                message: "Entry Created Successfullly"
            }
        )
    } catch (error) {
        console.log("Error while creating the todos", error);
        
        // send json response with error flag
        res
        .status(500)
        .json(
            {
                success: false,
                data: "Internal Server message",
                message: error.message
            }
        )
        
    }
}


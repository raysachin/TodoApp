
// import the model
const Todo = require("../models/todo.models")

// Define Route handlers.
// You are here because you have  hit a route definitely

exports.getTodo = async(req, res) =>{
    try {

        // fetch all todo item from database
        const todos = await Todo.find();

        // response
        res
        .status(200)
        .json({
            success: true,
            data: todos,
            message: "Entire todo data is fetched"
        })
        
    } catch (error) {
        console.log("Error in getting the all todos", error);

        res
        .status(500)
        .json({
            success: false,
            data: "Internal Server error",
            message: error.message
        })
        
        
    }
}

// extract todos on the basis of id

// controllers for get single todos
exports.getTodoById = async(req, res) =>{
    try {

        // extract todos on the basis of id

        // fetch the if
        const id = req.params.id;

        // find the item
        const todo = await Todo.findById({_id: id});

        // case 1: id mile hi nii, i.e data for given id not found
        if (!todo) {
            return res
            .status(404)
            .json({
                success: false,
                data: "Todo item not found",
                message: "No Data found with given id"
            })
        }

        // data for given id found
        res
        .status(200)
        .json({
            success: true,
            data: todo,
            message: `Todo ${id} item fetched successfully`
        })
        
        
    } catch (error) {
        console.log("Error in getting the all todos", error);

        res
        .status(500)
        .json({
            success: false,
            data: "Internal Server error",
            message: error.message
        })
        
        
        
    }
}


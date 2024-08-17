
// import the model
const Todo = require("../models/todo.models")

// Define Route handlers.
// You are here because you have  hit a route definitely

exports.deleteTodo = async(req, res) =>{
    try {
        // Fetch the id
        const {id} = req.params;

        // update
        const todo = await Todo.findByIdAndDelete(
            {_id: id}
        )

        // send into response
        res
        .status(200)
        .json({
            success: true,
            data: todo,
            message: "Todo Deleted successfully"
        })
        


    } catch (error) {
        console.log("Error while deleting the todos", error);
        
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


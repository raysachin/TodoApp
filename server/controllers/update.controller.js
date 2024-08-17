
// import the model
const Todo = require("../models/todo.models")

// Define Route handlers.
// You are here because you have  hit a route definitely

exports.updateTodo = async(req, res) =>{
    try {
        // Fetch the id
        const {id} = req.params;

        // fetch the changes from the body that user sent
        const {title, description} = req.body;

        // update
        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description}
        )

        // send into response
        res
        .status(200)
        .json({
            success: true,
            data: todo,
            message: "Todo updated successfully"
        })
        


    } catch (error) {
        console.log("Error while updating the todos", error);
        
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


const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            maxLength: 50
        },
        description:{
            type: String,
            required: true,
            maxLength: 50
        },
        // createdAt:{
        //     type: Date,
        //     required: true,
        //     default: Date.now()
        // },
        // updatedAt:{
        //     type: Date,
        //     required: true,
        //     default: Date.now()
        // }
        // because we have used timestamps for this part
        
    },
    {timestamps: true}
)

// export schema
module.exports = mongoose.model("Todo", todoSchema);  // always export with name stared from Capital letter 
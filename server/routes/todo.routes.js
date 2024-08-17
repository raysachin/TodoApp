
const express = require("express");
const router = express.Router();

// import contrllers
const {createTodo} = require("../controllers/createTodo.controller");

// import controller for getTodo 
const {getTodo, getTodoById} = require("../controllers/getTodo.controller");

// import update controllers
const {updateTodo} = require("../controllers/update.controller");

// import delete controllers
const {deleteTodo} = require("../controllers/deleteTodo.controller");

// define API Routes
router.post("/createTodo", createTodo);

// routes for getTodo
router.get("/getTodo", getTodo);

// routes for single getTodo
router.get("/getTodo/:id", getTodoById);

// routes for update todo
router.put("/updateTodo/:id", updateTodo);

// routes for delete todo
router.delete("/deleteTodo/:id", deleteTodo);

// export
module.exports = router;
const express = require("express");
const Todo = require("../model/todo");
const CostumeError = require("../error/CostumeError");
const router = express.Router();
const asyncHandler = require('express-async-handler');



router.get("/todos",asyncHandler(async(req,res,next) => {
    
    const TodosList = await Todo.find({});
    const dateList = await Todo.find({},'created_at')
    
    res.status(200).
    json({
        success:true,
        data: TodosList
    });
}));
router.post("/add_todo",asyncHandler(async(req,res,next) => {
        const {name} = req.body;
        
        const todo = await Todo.create({
            name : name
        });
        
        res.json({
            success : true,
            data: todo
        })
        
    
}));

router.delete("/delete_todo/:id",asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    
    const deletedTodo = await Todo.findByIdAndRemove(id);
    const newDate = new Date(deletedTodo.created_at)
    if (!deletedTodo){
        return next(new CostumeError("Not Found Todo!",400))
    }
    console.log(deletedTodo.created_at)
    res.status(200)
    .json({
        success:true,
        data : deletedTodo
    })
}));

router.delete("/delete_all",async (req,res) =>{
    Todo.deleteMany({})
    .then((count) => {
        
        res.status(200).json({
            success:true,
            deleted_count: count.deletedCount
        })
    })
    .catch((err) => {
        return new CostumeError("Deleted All Error",500) })
    
})

module.exports = router;
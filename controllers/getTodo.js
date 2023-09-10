//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
         const todos=await Todo.find({});
         //response update
         res.status(200).json(
            {
                success:true,
                data:response,
                message:'all Todo fetched',
            }
        );   
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(404)
        .json({
            success:false,
            data:"no data found",
            message:err.message,
        })
    }
}


exports.getTodoById = async(req,res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        //id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found",
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:'Todo found',
        })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"no data found",
            message:err.message,
        })
    }
}

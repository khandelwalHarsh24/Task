const pool=require('../DB/connectdb');
const query=require('../queries/task');
const uuidValidate = require('uuid-validate');
const {createCustomError}=require('../errors/errorclass');

const getalltask=async(req,res,next)=>{
    try{
        const allTask=await pool.query(query.getalltask);
        res.status(200).json(allTask.rows);
    }catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}

const gettask=async(req,res,next)=>{
    try{
        const task_id=req.params.id;
        if (!uuidValidate(task_id, 4)) {
            return next(createCustomError('Invalid UUID format for task',400))
        }
        const singleTask=await pool.query(query.gettask,[task_id]);
        if(singleTask.rows.length===0){
            return next(createCustomError(`Task with Id ${task_id} does not found`,404));
        }
        res.status(200).json(singleTask.rows);
    }catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}

const addtask=async(req,res,next)=>{
    try{
        const {title,description,status}=req.body;
        const existtask=await pool.query(query.gettaskBytitle,[title]);
        if(!title || !description){
           return next(createCustomError('Please Provide all details',400))
        }
        if(existtask.rowCount!==0){
           return next(createCustomError('Already Exist Task',400))
        }
        if(status===undefined){
            await pool.query(query.addtaskWithoutStatus,[title,description]);
        }
        else{
            await pool.query(query.addtask,[title,description,status]);
        }
        res.status(200).json({"Message":"Task Successfully Created"});
    }catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updatetask=async(req,res,next)=>{
    try{
        const task_id=req.params.id;
        if (!uuidValidate(task_id, 4)) {
            return next(createCustomError('Invalid UUID format for task ID',400))
        }
        const {title,description,status}=req.body;
        const values=[title,description,status,task_id];
        const result=await pool.query(query.updatetask,values);
        if(result.rowCount===0){
            return next(createCustomError('Task not found for this Id',404))
        }
        const updatedtask=result.rows[0];
        res.status(200).json(updatedtask);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deletetask=async(req,res,next)=>{
    try {
        const task_id=req.params.id;
        if (!uuidValidate(task_id, 4)) {
            return next(createCustomError('Invalid UUID format for task ID',400))
        }
        await pool.query(query.deletetask,[task_id]);
        res.status(200).json({"Message":"Task Successfully Deleted"})
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports={getalltask,gettask,addtask,deletetask,updatetask};
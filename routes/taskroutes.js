const express=require('express');
const router=express.Router();

const {getalltask,gettask,addtask,updatetask,deletetask}=require('../controller/taskcontroller');

router.route('/').get(getalltask).post(addtask);

router.route('/:id').get(gettask).put(updatetask).delete(deletetask);

module.exports=router;

const getalltask="select * from tasks";

const gettask="select * from tasks where id=$1"

const gettaskBytitle="select * from tasks where title=$1"

const addtask="insert into tasks (title,description,status) values ($1,$2,$3) returning *"

const addtaskWithoutStatus="insert into tasks (title,description) values ($1,$2)"

const updatetask="update tasks set title = $1, description = $2, status = $3 where id = $4 returning *";

const deletetask="delete from tasks where id=$1"

module.exports={getalltask,gettask,addtask,addtaskWithoutStatus,gettaskBytitle,updatetask,deletetask}
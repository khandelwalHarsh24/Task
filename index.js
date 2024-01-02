const express=require('express');
const app=express();
const port=3000;
require('dotenv/config')
const taskRoutes=require('./routes/taskroutes');
const notfound=require('./middleware/notfound');
const errorhandler=require('./middleware/errorhandler');

app.use(express.json());


app.use('/',(req,res)=>{
    res.status(200).json({"Message":"Redirect to /api/v1/tasks"});
})

app.use('/api/v1/tasks',taskRoutes);

app.use(notfound);

app.use(errorhandler);

const start=async ()=>{
    try {
        app.listen(port,console.log(`Server Listening To The Port ${port}`));
    } catch (error) {
        console.log(error);
    }
}


start();
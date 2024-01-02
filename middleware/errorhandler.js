const {CustomError}=require('../errors/errorclass');
const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({message:err.message});
    }
    return res.status(500).json({message:"Something went wrong"});
}

module.exports=errorHandlerMiddleware
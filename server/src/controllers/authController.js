const userDBA=require('../db/models/users');
const passwordUtil=require('../utils/password');
const jwtTokenUtils=require('../utils/jwttoken');
const responseHandler=require('../utils/responsehandler');

exports.loginUser=(req,res)=>{
    const emailId=req.body.emailId;
    const password=req.body.password;
    let userDetails={};
    return userDBA.findOne({'emailId':emailId})
    .then(userDBAResponse=>{
       userDetails={
           firstName:userDBAResponse.firstName,
           lastName:userDBAResponse.lastName,
           emailId:userDBAResponse.emailId,
           token:'' 
    };
       return passwordUtil.validatePassowrd(password,userDBAResponse.password);
    })
    .then(passwordVerification=>{
        if(passwordVerification){
            userDetails.token=jwtTokenUtils.generateToken(req,userDetails.id,`${userDetails.firstName} ${userDetails.lastName}`);
            res.send(userDetails);
        } else{
            res.send({message:"Invalid EmailId or password"});
        }
    })
    .catch(err=>{
        console.log(err);
        responseHandler.errorResponse(req,res,'Invalid EmailId or password',500);
    })
}
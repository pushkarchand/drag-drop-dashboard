let jwt  = require('jsonwebtoken');
const responseHandler=require('./responsehandler');
let secret = 'switchon2020';

exports.generateToken=(req, customerId,userName,opts)=> {
    opts = opts || {};
    // By default, expire the token after 7 days.
    // NOTE: the value for 'exp' needs to be in seconds since
    // the epoch as per the spec!
    let expiresDefault = '7d';
  
    let token = jwt.sign({
      auth:  customerId,
      userName,
      agent: req.headers['user-agent']
    }, secret, { expiresIn: opts.expires || expiresDefault });
  
    return token;
  }

  exports.authorizeToken=(req,res,next)=>{
    const token=req.headers.token;
    if(token){
      let tokenData=jwt.decode(token);
      req.userId=tokenData.auth;
      next();
    } else{
      responseHandler.errorResponse(req,res,'Invalid request',500);
    }
  }
  
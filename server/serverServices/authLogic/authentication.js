const webtoken = require("jsonwebtoken");

generateAccessToken= (user)=>{
  return webtoken.sign(user, `${process.env.SERVER_ACCESS_TOKEN}`,{expiresIn:'30m'})   
}
generateRefreshToken= (user)=>{
  return webtoken.sign(user, `${process.env.SERVER_REFRESH_TOKEN}`,{expiresIn:'60m'})   
}

verifyToken = (req, res, next)=>{
  let authHeader = req.headers["authkey"]
  let token =""
  if(authHeader){
    token = authHeader.split(' ')[1];
  }
  if (token=="") {
    return res.status(403).send({ message: "No token provided!" });
  }

  webtoken.verify(token, `${process.env.SERVER_ACCESS_TOKEN}`, (err, user) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.currentuser = user;
    next();
  });
};

module.exports = {
    verifyToken,
    generateAccessToken,
    generateRefreshToken
};
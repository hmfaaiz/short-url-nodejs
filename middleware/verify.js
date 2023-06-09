const {getUser}= require("../service/auth");

function verify(req,res,next){
    const cookiePresent=req.cookies?.mycookie
    if(!cookiePresent){
        return res.render("login")
    }
    const user=getUser(cookiePresent)
    if(!user){
        return res.render("login")
    }
    req.user=user;
    next()
}
// function checkAuth(req,res,next){
//     const cookiePresent=req.cookies?.mycookie
//     const user=getUser(cookiePresent)
//     // req.user=user;
//     next()
// }

module.exports={verify};
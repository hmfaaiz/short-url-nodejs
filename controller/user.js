const {v4:uuidv4}=require("uuid")
const user = require("../model/user")
const {setUser}= require("../service/auth");

async function signUp(req, res) {

    await user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    return res.render("signup")

}
async function logIn(req, res) {
    const {email,password}= req.body;
   
    const userlogined = await user.findOne({email,password})
    if (!userlogined) {
   
        return res.render("login")
    }
    const sessionId=uuidv4();
    setUser(sessionId,userlogined)
    res.cookie("mycookie",sessionId)
   
    return res.render("home")

}

function register(req, res) {

    return res.render("login")

}
module.exports = { signUp, logIn, register }
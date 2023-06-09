const express = require("express");
const app = express()
const mongoose = require("mongoose")
const path=require("path")
const urlRouter = require("./route/url.js")
const userRouter = require("./route/user.js")
const cookieParser=require("cookie-parser")
const {verify}=require("./middleware/verify")
// const staticRouter = require("./staticRoute/route.js")
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.Mongodb_url).then(
    () => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log(err)
    });


app.set("view engine","ejs")   
app.set("views",path.resolve("./views"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/url',verify, urlRouter)
app.use('/api/user', userRouter)


app.listen(process.env.PORT, () => {
    console.log("server is running")
})
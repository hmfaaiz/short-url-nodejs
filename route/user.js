const express = require("express");
const router = require("express").Router();
const user = require("../model/user")
const {signUp,logIn,register}=require("../controller/user")


router.post("/signup",signUp);
router.post("/login", logIn);
router.get("/", register);




module.exports = router;
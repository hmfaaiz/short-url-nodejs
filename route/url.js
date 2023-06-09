const express = require("express");
const router = require("express").Router();
const url = require("../model/url")
const { genrateShortId,useShortId,totalClick,allUrls } = require("../controller/url")


router.post("/shorturl", genrateShortId);
router.get("/find/:id", useShortId);
router.get("/totalclick/:id",totalClick);
router.get("/",allUrls);




module.exports = router;
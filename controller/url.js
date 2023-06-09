const shortid = require('shortid')
const url=require("../model/url")

async function genrateShortId(req,res){
    const sId=shortid();
 
    await url.create({
        shortID:sId,
        url:req.body.url,
        urlHistory:[],
        generatedBy:req.user._id,
    })
 
    return res.render("home",{id:sId})
    // return res.status(200).json({id:sId});
    // return allUrls
}

async function useShortId(req, res){

    const shortID = req.params.id;
    const entry = await url.findOneAndUpdate({ shortID ,},
        {
            $push:
                { urlHistory: { timestamp: new Date().toLocaleString(), }, }
        }
    )
    return res.redirect(entry.url)
}

async function totalClick(req,res){
    const shortID = req.params.id;
    const click = await url.findOne({ shortID})
    return res.status(200).json({"total":click.urlHistory.length})
}


async function allUrls(req,res){
    if(!req.user) return res.render("login")
    const presentUrl=await url.find({generatedBy:req.user._id});
    return res.render("home",{urls:presentUrl})
    // return presentUrl
}


module.exports={genrateShortId,useShortId,totalClick,allUrls}
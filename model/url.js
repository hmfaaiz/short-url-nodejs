const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    shortID: { type: String, uinque: true, required: true },
    url: { type: String },
    urlHistory: [{ timestamp: { type:String } }],
    generatedBy:{type:mongoose.Schema.Types.ObjectId,ref:"users"}
},
    { timestamp: true },
);
module.exports = mongoose.model("url", urlSchema);
const mongoose=require("mongoose")


const newsSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
        unique:true
    },
    author: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    url: {
        type: String,
        require:true
    },
    timestamp: {
        type: String,
        require:true
    },
    link: {
        type: String,
        require:true
    },
    publisher: {
        type: String,
        require:true
    }
})


const data = mongoose.model("inshortclonedata", newsSchema)

module.exports=data
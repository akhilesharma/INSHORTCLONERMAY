const mongoose=require("mongoose")


// const url ="mongodb://akhileshsharmask:TP6JIGBtuTZhdM6E@ac-bdgtzfa-shard-00-00.2v4fqhm.mongodb.net:27017,ac-bdgtzfa-shard-00-01.2v4fqhm.mongodb.net:27017,ac-bdgtzfa-shard-00-02.2v4fqhm.mongodb.net:27017/MYINSHORTCLONER4MAY?ssl=true&replicaSet=atlas-45npmj-shard-0&authSource=admin&retryWrites=true&w=majority"

const url = process.env.mongourl
// const url ="mongodb://127.0.0.1/05mayinshortcloner"

exports.connection = async() => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true })   
        console.log("database is connected");
    }
    catch (error) {
        console.log("error while database connected : ",error);
    }
}


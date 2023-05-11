
const {data} =require("./ConstantData/data")
const newsModel=require("./model/newsModel")

exports.defaultData = async(req) => {
    try {
        await newsModel.deleteMany({})
        await newsModel.insertMany(data)

        console.log("default data is inserted...");
    }
    catch (error) {
        console.log("error in default data : ",error.message);
    }
}

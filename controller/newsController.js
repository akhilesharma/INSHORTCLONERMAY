
const newsModel=require("../model/newsModel")

exports.getdata = async (req, res) => {

    
    try {
      const data= await newsModel.find({})
        res.status(200).json({ result: data })
    }
    catch (error) {
        console.log("error in newscontroller : ",error.message);
    }


}


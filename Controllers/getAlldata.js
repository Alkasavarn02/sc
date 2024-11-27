const ReportScam = require("../Schema/reportScamSchema");

const getAllDataController = async(req,res)=>{

    try {

        const result = await ReportScam.find({})

        return res.status(200).json(
            {
                success:true,
                data: result
            }
        )
        
    } catch(err){
        return res.status(500).json(
            {
                success: false, 
                data: "Something went wrong while fetching Task please try again later",
                message: `Internal Server error , ${err.message}`                
            }
        )
    }
}

module.exports = getAllDataController;
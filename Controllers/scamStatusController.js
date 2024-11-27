const ReportScam = require("../Schema/reportScamSchema");

const scamStatusController = async(req,res)=>{

    try {
        const { value } = req.query;

        if (!value) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'Type and Value are required.' 
                }
            );
        }

        const result = await ReportScam.findOne({value});

        if (!result) {
            return res.status(201).json(
                {   
                    success: true,
                    data: {"isScam": false, "reports": 0} 
                }
            );
        } 

        return res.status(200).json(
            {
                success:true,
                data: {"isScam": true, "reports": result.reports}
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

module.exports = scamStatusController;
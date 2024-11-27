const ReportScam = require("../Schema/reportScamSchema");

const reportScamController =  async(req,res)=>{

    try{

        const {type, value, details} = req.body;

        if(!type || !value || !details){
            return res.status(400).json({
                success: false,
                message: "Please provide all the details Carefully"
            });
        }

        const valueExisted = await ReportScam.findOne({value})

        if (valueExisted) {
            valueExisted.reports += 1;
            await valueExisted.save();

            return res.status(200).json({
                success: true,
                message: "Report count incremented successfully.",
            });
        }

        await ReportScam.create({type, value, details})

        return res.status(201).json(
            {
                success: true, 
                message: "Report scam added successfully",      
            }
        );

    } catch(err){
        return res.status(500).json(
            {
                success: false, 
                data: "Something went wrong please try again later.",
                message: `Internal Server error , ${err.message}`                
            }
        );
    }
}

module.exports = reportScamController;
const mongoose = require("mongoose");

const ReportScamSchema = new mongoose.Schema(
    {
        type:{
            type:String,
            required:true
        },
        value:{
            type:String,
            required:true
        },
        details:{
            type:String,
            required:true
        },
        reports:{
            type: Number,
            default: 1
        }
    }
)

module.exports = mongoose.model("ReportScam",ReportScamSchema);
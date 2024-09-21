const mongoose = require("mongoose")

//  Schema modal for Issues
const projectsSchema = new mongoose.Schema({

    projectName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    authorName:{
        type:String,
        required:true,
    },
    // We will have to populate issues from the issue model based upon object _id
    issues:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Issue'
        }
    ], 
    labels:[
        {
            type:String,
        }
    ]
},{
    timestamps:true,
})
module.exports = mongoose.model('Project',projectsSchema)
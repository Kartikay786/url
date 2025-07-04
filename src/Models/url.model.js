import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    orginalUrl :{
        type : String,
        required:true
    },
    shortId : {
        type:String
    },
    shortUrl : {
        type:String,
        required:true
    }
},{timestamps:true})

const Url = new mongoose.model('Url',urlSchema);

export default Url
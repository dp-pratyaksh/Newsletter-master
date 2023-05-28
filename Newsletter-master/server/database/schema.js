const mongoose=require("mongoose");
const DBURL="mongodb+srv://maggavsbalti:maggavsbalti@cluster0.5m5jj6o.mongodb.net/";
mongoose.connect(DBURL).then(()=>{console.log("connection successful")},(e)=>{console.log(e)})
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});
const email=mongoose.model("UserSchema",schema);
module.exports={email};
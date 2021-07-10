var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");


var userSchema=new mongoose.Schema({
 
 username :  {type : String, unique : true, required : true},
 alias : String,
 password : String,
 firstname : String,
 lastname : String,
 resetPasswordToken :String,
 resetPasswordExpires :Date,
 isAdmin : {type : Boolean, default : false},
 referralCode :{type : String,default : "noreferral"},
 points : {type :Number, default:0}

});


userSchema.plugin(passportLocalMongoose);
module.exports= mongoose.model("User",userSchema);
var mongoose=require("mongoose");



var moment = require('moment-timezone');



var answerSchema=new mongoose.Schema({
 
 text : String,
 
 author : {
   id : {
     type : mongoose.Schema.Types.ObjectId,
     ref : "User"
   },
   username : String
 },
 
 posted_at: {type : Date, default : Date.now},
 


});

module.exports= mongoose.model("Answer",answerSchema);
// likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
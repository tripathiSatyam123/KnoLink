var mongoose=require("mongoose");
var Answer=require("./../models/answer.js");






var postSchema=new mongoose.Schema({
 
 
 question : String,
 
 author : {
   id : {
     type : mongoose.Schema.Types.ObjectId ,
     ref : "User"
   },
   username : String,
   alias : String
 },
 answers : [
       {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Answer"
       }
  ],
  
   
 posted_at: {type : Date, default : Date.now},
 
 notes_count: {type : Number, default : 5}


 
});



module.exports= mongoose.model("Post",postSchema);
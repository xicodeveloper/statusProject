var mongoose = require("mongoose");

var rSchema = mongoose.Schema({
  name: {type:String}, // add a username field
  title: {type:String},
  file: {
    type: String,  // Specify the data type as string
    required: true
  },
  data:{type:String},
  content:{type:String},
  
});

module.exports= mongoose.model('Report', rSchema);



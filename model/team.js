var mongoose = require("mongoose");

var memberSchema = mongoose.Schema({
  member_name: {type:String, unique:true}, // add a username field
  email: {type:String, unique:true},
  member_function:{type:String},
  bio:{type:String},
  image:{type:String},
  image: {
    type: String,  // Specify the data type as string
    required: true
  },
});

module.exports= mongoose.model('Member', memberSchema);



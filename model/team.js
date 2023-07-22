var mongoose = require("mongoose");

var memberSchema = mongoose.Schema({
  member_name: {type:String}, // add a username field
  email: {type:String},
  member_function:{type:String},
  bio:{type:String},
  image:{type:String},

});

module.exports= mongoose.model('Member', memberSchema);



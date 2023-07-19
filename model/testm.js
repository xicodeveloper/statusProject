var mongoose = require("mongoose");

var testmSchema = mongoose.Schema({
  name: {type:String}, // add a username field
  place: {type:String},
  image: {
    type: String,  // Specify the data type as string
    required: true
  },
  data:{type:String},
  author:{type:String},
  content:{type:String}
});

module.exports= mongoose.model('Testemunha', testmSchema);



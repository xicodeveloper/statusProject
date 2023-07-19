var mongoose = require("mongoose");

var newsSchema = mongoose.Schema({
  author: {type:String},
  date: {type:String},
  image: {
    type: String, 
    required: true
  },
  title:{type:String},
  content: {type:String}
});
newsSchema.index({ title: 'text' });

module.exports= mongoose.model('New', newsSchema);


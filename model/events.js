var mongoose = require("mongoose");

var newsSchema = mongoose.Schema({
  author: {type:String},
  date: {type:String},
  image: {
    type: String, 
    required: true
  },
  content: {type:String},
  title:{type:String},
  ative:{type:Boolean, default:true}
});
newsSchema.index({ title: 'text' });
module.exports= mongoose.model('Event', newsSchema);


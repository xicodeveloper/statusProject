const mongoose = require("mongoose");

const glosSchema = mongoose.Schema({
  word: String,
  content: String,
  author: String,
  date: String,
  ative:{type:Boolean, default:true}
});

const Gloss = mongoose.model("Gloss", glosSchema);

module.exports = Gloss;
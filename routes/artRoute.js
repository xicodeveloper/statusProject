const router=require("express").Router();
const Gloss= require("../model/glos")

router.get('/article',async function (req,res) {
    try {
  
        const glos = await Gloss.find({});
        res.render("art", {glos:glos})
      } catch (error) {
        console.log("ERROR:", error);
      }

})

module.exports=router;
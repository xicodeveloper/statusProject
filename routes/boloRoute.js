const router=require("express").Router();

router.get('/bolo',function (req,res) {
res.render("bolocaco.ejs")
})

module.exports=router;
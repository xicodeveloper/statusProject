const router=require("express").Router();

router.get('/gbs',function (req,res) {
res.render("gbs")
})

module.exports=router;
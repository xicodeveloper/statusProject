const router=require("express").Router();

router.get('/ins',function (req,res) {
res.render("ins")
})

module.exports=router;
const router=require("express").Router();

router.get('/obj',function (req,res) {
res.render("obj")
})

module.exports=router;
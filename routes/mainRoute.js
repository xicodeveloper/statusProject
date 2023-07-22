const router=require("express").Router();

router.get('/main',function (req,res) {
res.render("main")
})

module.exports=router;
const router=require("express").Router();

router.get('/arch',function (req,res) {
res.render("arch")
})

module.exports=router;
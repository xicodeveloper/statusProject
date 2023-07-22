const router=require("express").Router();

router.get('/insertn',function (req,res) {
res.render("insNewEv")
})


module.exports=router;
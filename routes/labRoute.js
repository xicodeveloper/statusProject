const router=require("express").Router();

router.get('/lab',function (req,res) {
res.render("lab")
})

module.exports=router;
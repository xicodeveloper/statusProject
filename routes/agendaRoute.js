const router=require("express").Router();

router.get('/agenda',function (req,res) {
res.render("agenda")
})

module.exports=router;
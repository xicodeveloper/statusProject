const router=require("express").Router();

router.get('/gamet',function (req,res) {
res.render("gameteam")
})

module.exports=router;
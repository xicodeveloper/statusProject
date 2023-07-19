const router=require("express").Router();

router.get('/stageg',function (req,res) {
res.render("statusg")
})

module.exports=router;
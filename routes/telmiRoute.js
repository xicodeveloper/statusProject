const router=require("express").Router();

router.get('/telmi',function (req,res) {
res.render("telmi")
})

module.exports=router;
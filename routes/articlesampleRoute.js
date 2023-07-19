const router=require("express").Router();

router.get('/page',function (req,res) {
res.render("articlesample")
})

module.exports=router;
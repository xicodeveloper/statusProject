const router=require("express").Router();
router.get("/ins/new", function(req, res){
    res.render("createTestm")
})
module.exports=router;
const router=require("express").Router();
router.get("/testm/new", function(req, res){
    res.render("createTestm")
})
module.exports=router;
const router=require("express").Router();
const indexController=require("../controller/indexController")
router.get('/mission',function (req,res) {
    res.render("mission")
});

module.exports=router;
const router=require("express").Router();
const indexController=require("../controller/indexController")
router.get('/pagealt',function (req,res) {
    res.render("pagealt")
});

module.exports=router;
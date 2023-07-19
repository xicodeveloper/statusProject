const router=require("express").Router();

router.get('/restres',function(req,res){
    res.render('restres.ejs');
})
module.exports=router;
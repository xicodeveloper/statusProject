const router=require("express").Router();

router.get('/insreports',function(req,res){
    res.render('insreports.ejs');
})
module.exports=router;
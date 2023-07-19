const router=require("express").Router();

router.get('/resdois',function(req,res){
    res.render('resdois.ejs');
})
module.exports=router;
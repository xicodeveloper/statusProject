const router=require("express").Router();

router.get('/skate',function(req,res){
    res.render('skate.ejs');
})
module.exports=router;
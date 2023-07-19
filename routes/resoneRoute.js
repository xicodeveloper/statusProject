const router=require("express").Router();

router.get('/resone',function(req,res){
    res.render('one.ejs');
})
module.exports=router;
const router=require("express").Router();

router.get('/resquatro',function(req,res){
    res.render('resquatro.ejs');
})
module.exports=router;
const router=require("express").Router();

router.get('/rescinco',function(req,res){
    res.render('rescinco.ejs');
})
module.exports=router;
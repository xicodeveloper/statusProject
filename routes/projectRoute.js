const router=require("express").Router();

router.get('/project',function(req,res){
    res.render('project.ejs');
})
module.exports=router;
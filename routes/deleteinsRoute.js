const router=require("express").Router();
const indexController=require("../controller/indexController")

router.post('/insertnn/delete/:newsId', indexController.formPostNews);
router.post('/insertnn/delete/:eventsId', indexController.formPostEvents);

router.get('/insertnn',function(req,res){
res.render("insertnn")
});
    
module.exports=router;
const router=require("express").Router();
const indexController=require("../controller/indexController")

router.get('/insertnnn',function (req,res) {
res.render("changeinsert")
})
router.get('/news/show/:newsId', indexController.showN);
router.get('/event/show/:eventsId', indexController.showE);




module.exports=router;
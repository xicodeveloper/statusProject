const router=require("express").Router();
const indexController=require("../controller/indexController")

router.post('/article/delete/:glossId', indexController.formPostGloss);
router.get('/article/update', indexController.updateGloss);
router.get('/article/show/:glossId', indexController.showG);
router.post('/article/update/:glossId', indexController.updateGlosss);





router.get('/article/delete',indexController.formDGloss);
    
module.exports=router;
const router=require("express").Router();
const indexController=require("../controller/indexController")

router.post('/gl/delete/:glossId', indexController.formPostGloss);
router.get('/gl/update', indexController.updateGloss);
router.get('/gl/show/:glossId', indexController.showG);
router.post('/gl/update/:glossId', indexController.updateGlosss);





router.get('/gl/delete',indexController.formDGloss);
    
module.exports=router;
const router=require("express").Router();
const indexController=require("../controller/indexController")

router.post('/rep/delete/:reportId', indexController.formPost);
router.get('/rep/delete',indexController.formDGet);
router.get('/rep/update', indexController.updateReport);
router.get('/rep/show/:archId', indexController.showA);



module.exports=router;
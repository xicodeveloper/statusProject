const router=require("express").Router();
const indexController=require("../controller/indexController")

router.post('/arch/delete/:reportId', indexController.formPost);
router.get('/arch/delete',indexController.formDGet);
router.get('/arch/update', indexController.updateReport);
router.get('/arch/show/:archId', indexController.showA);



module.exports=router;
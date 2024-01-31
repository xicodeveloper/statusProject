const router=require("express").Router();
const indexController=require("../controller/indexController")

router.post('/ins/delete/:testmId', indexController.formPostTestm);
router.get('/ins/delete',indexController.formDTestm);
router.get('/ins/update', indexController.updateTestm);
router.get('/ins/show/:testmId', indexController.showT);



module.exports=router;
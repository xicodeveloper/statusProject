const router=require("express").Router();
const indexController=require("../controller/indexController")

router.post('/testm/delete/:testmId', indexController.formPostTestm);
router.get('/testm/delete',indexController.formDTestm);
router.get('/testm/update', indexController.updateTestm);
router.get('/testm/show/:testmId', indexController.showT);



module.exports=router;
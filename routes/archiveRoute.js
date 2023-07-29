const router=require("express").Router();
const indexController=require("../controller/indexController")


router.get('/arch',indexController.geraNewsE)
router.get('/arch/:enId', indexController.archId);

module.exports=router;
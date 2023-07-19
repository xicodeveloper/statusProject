const router=require("express").Router();
const indexController=require("../controller/indexController")
router.get('/news/:id', indexController.profileNewsE);

module.exports=router;
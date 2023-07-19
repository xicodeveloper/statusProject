const router=require("express").Router();
const indexController=require("../controller/indexController")
router.get('/team/:id', indexController.profileTeam);

module.exports=router;
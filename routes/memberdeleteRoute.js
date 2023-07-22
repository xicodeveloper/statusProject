const router=require("express").Router();
const indexController=require("../controller/indexController")

router.post('/member/delete/:memberId', indexController.formPostMember);
router.get('/member/delete',indexController.formDGetMember);
router.get('/member/update/', indexController.updateMmember);
router.get('/member/show/:memberId', indexController.showM);


module.exports=router;
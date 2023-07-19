
  const router=require("express").Router();
  router.get('/member/new', async function (req, res) {
    res.render("addmember");
  });
module.exports=router;
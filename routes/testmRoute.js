const router=require("express").Router();
const Opinion=require("../model/testm")
router.get('/testm', async function (req, res) {
    const opinioes=await Opinion.find({});

    res.render("testm", {opinioes:opinioes})
});

module.exports=router;
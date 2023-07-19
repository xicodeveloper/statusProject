const Glos = require("../model/glos");
const index = require("../controller/indexController");

const router = require("express").Router();

router.get('/article/new', async function (req, res) {
  res.render("createArt");
});

router.post('/article/new',index.formGlos);
   

module.exports = router;

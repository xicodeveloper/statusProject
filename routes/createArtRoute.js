const Glos = require("../model/glos");
const index = require("../controller/indexController");

const router = require("express").Router();

router.get('/gl/new', async function (req, res) {
  res.render("createArt");
});

router.post('/gl/new',index.formGlos);
   

module.exports = router;

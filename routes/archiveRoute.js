const router=require("express").Router();
const reports=require("../model/reports")
router.get('/arch', async function (req,res) {
    try {
  
        const report = await reports.find({});
        res.render("arch", {report:report})
      } catch (error) {
        console.log("ERROR:", error);
      }
})

module.exports=router;
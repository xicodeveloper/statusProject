const router = require("express").Router();
const Gloss = require("../model/glos");
const Member = require("../model/team");
const Testm = require("../model/testm");
const Events = require("../model/events");
const News = require("../model/news");
const Reports = require("../model/reports");
/*
const membros = await Member.find({});
const reports = await Reports.find({});
const glos = await Gloss.find({});
const news = await News.find({});
const ev = await Events.find({});

// Extract titles from each document array
const membrosTitles = membros.map((item) => item.member_name);
const wordTitles = reports.map((item) => item.title);
const glosTitles = glos.map((item) => item.word);
const newsTitles = news.map((item) => item.title);
const evTitles = ev.map((item) => item.title);

// Combine all titles into a single array
const allTitles = [...membrosTitles, ...wordTitles, ...glosTitles, ...newsTitles, ...evTitles];
console.log(allTitles)
*/
router.get('/searche', async (req, res) => {
  const link2 = req.query.query2;
  console.log("Received search request with query:", link2);
  try {
    const ev = await Events.findOne({ title: { $regex: new RegExp('^' + link2, 'i') } });
    const news = await News.findOne({ title: { $regex: new RegExp('^' + link2, 'i') } });

    if (ev) {
      console.log("Event found:", ev);
      return res.redirect(`/arch/${ev._id}`);
    }

    if (news) {
      console.log("News found:", news);
      return res.redirect(`/arch/${news._id}`);
    }

    console.log("Not found");
    res.redirect("/arch");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred while searching.");
  }
});


router.get('/searchn', async (req, res) => {
  const link = req.query.in;
  

  console.log('Selected option:', link);

  try {

    const membros = await Member.find({ member_name: { $regex: new RegExp('^' + link, 'i') } });
    const word = await Gloss.find({ word: link });

    const reports = await Reports.find({ title: { $regex: new RegExp('^' + link, 'i') } });

    const glos = await Gloss.find({});
    const news = await News.find({ title: { $regex: new RegExp('^' + link, 'i') } });

    const ev = await Events.find({ title: { $regex: new RegExp('^' + link, 'i') } });

let found=false;


    console.log('membros:', membros);
    console.log('word:', word);
    while(!found){
      if (membros.length > 0 || link==="Team" || link==="team") {
        res.redirect("/#team-section");
found=true;

      } else if(link==='Testimonies' || link==='testimonies'){
        res.redirect("/testm");
found=true;
  
    }else if(link==='Reports' || link==='reports' || reports.length > 0){
      res.redirect("/arch#wow")
found=true;

    }else if(link==='Objetives' || link==='objetives'){
      res.redirect("/obj")
found=true;

    }
    else if(link==='Resultados' || link==='results'){
      res.redirect("/resone#paises")
found=true;

    }
    else if(link==='agenda' || link==='Agenda'){
      res.redirect("/agenda")
found=true;

    }
    else if(link==='project' || link==='Project'){
      res.redirect("/page")
found=true;

    }
    else if(link==='game' || link==='Game'){
      res.redirect("/game")
found=true;

    }
    else if(link==='skateholders' || link==='Skateholders'){
      res.redirect("/skate#skate")
found=true;

    }
    else if(ev.length > 0 || news.length>0 || link==="News" || link==="news"  || link==="Events" || link==="events"){
      res.redirect("/arch")
found=true;
    }else if (word.length > 0) {
        const selectedWord = link.charAt(0).toUpperCase();
        const desliza = `/article?letra=${selectedWord}#S2`; // Pass the selected word as a query parameter in the URL
        console.log('Selected word:', selectedWord);
        res.render("art", { letra: selectedWord, glos: glos, desliza: desliza });
found=true;

      } else {
      res.redirect("/")
      
found=true;

       
      }
    }
    
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred while searching for members.");
  }
});


router.get('/article', async function (req, res) {
  try {
    const selectedWord = req.query.letra || "A"; // Get the selected word from the query parameter, default to "A"
    const desliza = req.query.desliza || "";
    const glos = await Gloss.find({});
    console.log('Selected word:', selectedWord);
    res.render("art", { letra: selectedWord, glos: glos, desliza: desliza })
  } catch (error) {
    console.log("ERROR:", error);
  }
});

module.exports = router;

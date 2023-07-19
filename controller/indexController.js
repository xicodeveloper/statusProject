const Members = require("../model/team");
const News = require("../model/news");
const Gloss= require("../model/glos")

// Route handler for creating a glossary article
const showTeamEvent = async function (req, res) {
  try {
    const team = await Members.find({});
    const newsE = await News.find({}).sort({ realized_data: -1 }).limit(3);
    var currentMember = 0;
    res.render("index", { team: team, newsE: newsE, currentMember: currentMember }); // Render the data in your template
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
const displayGlos = async function (req, res) {

  try {
  
    const glos = await Gloss.find({});

    console.log("Created Glos object:", glos);
    res.redirect("/article");
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/");
  }

}

const formGlos = async function (req, res) {

    try {
      const { author, word, content } = req.body;
      const date = req.body.date || new Date().toISOString(); // Use the current date if no date is provided
  console.log(date)
      const glos = await Gloss.create({
        author: author,
        date: date,
        word: word,
        content: content
      });
  
      console.log("Created Glos object:", glos);
      res.redirect("/article");
    } catch (error) {
      console.log("ERROR:", error);
      res.redirect("/");
    }
  
}


  const profileTeam = async function (req, res) {
    const id = req.params.id;
    try {
      // Fetch the member data from the database using the provided ID
      const teamMember = await Members.findById(id);
  
      // Render the profileTeam view and pass the teamMember data
      res.render("profileTeam", { teamMember: teamMember });
    } catch (error) {
      // Handle errors and send an appropriate response
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const profileNewsE = async function (req, res) {
    const id = req.params.id;
    try {
      // Fetch the member data from the database using the provided ID
      const news = await News.findById(id);
  
      // Render the profileTeam view and pass the teamMember data
      res.render("profileNews", { news: news });
    } catch (error) {
      // Handle errors and send an appropriate response
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  module.exports = {
    showTeamEvent,
    profileTeam,
    profileNewsE,
   formGlos,

  };
  
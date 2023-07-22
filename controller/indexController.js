const Members = require("../model/team");
const Testm = require("../model/testm");

const News = require("../model/news");
const Events = require("../model/events");

const Gloss= require("../model/glos")
const Reports = require('../model/reports'); // Replace this with the path to your Reports model


const showTeamEvent = async function (req, res) {
  try {
    const team = await Members.find({});
    const newsE = await News.find({}).sort({ date: -1 }).limit(3);
    const Ev = await Events.find({}).sort({ date: -1 }).limit(3);

    // Merge news and events into a single array
    const combinedData = [...newsE, ...Ev];

    // Sort the combined array by date in descending order
    combinedData.sort((a, b) => b.date - a.date);

    // Get the three most recent items
    const threeMostRecent = combinedData.slice(0, 3);

    res.render("index", { team: team, threeMostRecent: threeMostRecent});
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

//-------------------------GLOSS--------------------------------

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
      res.redirect("/ins");
    } catch (error) {
      console.log("ERROR:", error);
      res.redirect("/");
    }
  
}
const formPostGloss = async function (req, res) {
  try {
    const glossId = req.params.glossId;

    // Find the report in the database by its ID
    const glossToDelete = await Gloss.findById(glossId);
    if (!glossToDelete) {
      return res.status(404).send("Gloss not found");
    }

    // Delete the report from the database
    await glossToDelete.deleteOne();

    // Redirect the user back to the "/gloss" page after successful deletion
    res.redirect("/ins");
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/ins");
  }
};

const formDGloss = async (req, res) => {
  try {
   
    const allGlosses = await Gloss.find({});

    // Render the "reportdelete" EJS template with the data
    res.render('glossdelete', { gloss: allGlosses });
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database retrieval or rendering
    res.status(500).send("Internal Server Error");
  }
};
//----------------TESTM APAGAR---------------------------
const formPostTestm = async function (req, res) {
  try {
    const testmId = req.params.testmId;

    // Find the report in the database by its ID
    const testmToDelete = await Testm.findById(testmId);
    if (!testmToDelete) {
      return res.status(404).send("Gloss not found");
    }

    // Delete the report from the database
    await testmToDelete.deleteOne();

    // Redirect the user back to the "/gloss" page after successful deletion
    res.redirect("/ins");
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/ins");
  }
};

const formDTestm = async (req, res) => {
  try {
   
    const allTestm = await Testm.find({});

    // Render the "reportdelete" EJS template with the data
    res.render('testmdelete', { testm: allTestm });
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database retrieval or rendering
    res.status(500).send("Internal Server Error");
  }
};
//---------------------REPORTS APAGAR-----------

const formPost = async function (req, res) {
  try {
    const reportId = req.params.reportId;

    // Find the report in the database by its ID
    const reportToDelete = await Reports.findById(reportId);
    if (!reportToDelete) {
      return res.status(404).send("Report not found");
    }

    // Delete the report from the database
    await reportToDelete.deleteOne();

    // Redirect the user back to the "/arch" page after successful deletion
    res.redirect("/ins");
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/ins");
  }
};

const formDGet = async (req, res) => {
  try {
    // Find all reports in the database
    const allReports = await Reports.find({});

    // Render the "reportdelete" EJS template with the data
    res.render('reportdelete', { reports: allReports });
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database retrieval or rendering
    res.status(500).send("Internal Server Error");
  }
};
//----------------EVENTS NEWS DELETE---------------------------

const formPostNews = async function (req, res) {
  try {
    const newsId = req.params.newsId;

    // Find the report in the database by its ID
    const newsToDelete = await News.findById(newsId);
    console.log(newsToDelete)
    if (!newsToDelete) {
      return res.status(404).send("News not found");
    }

    // Delete the report from the database
    await newsToDelete.deleteOne();

    // Redirect the user back to the "/arch" page after successful deletion
    res.redirect("/ins");
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/ins");
  }
};

const formPostEvents = async function (req, res) {
  try {
    const eventsId = req.params.eventsId;

    // Find the report in the database by its ID
    const eventsToDelete = await Events.findById(eventsId);
    if (!eventsToDelete) {
      return res.status(404).send("Events not found");
    }

    // Delete the report from the database
    await eventsToDelete.deleteOne();

    // Redirect the user back to the "/arch" page after successful deletion
    res.redirect("/ins");
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/ins");
  }
};

//----------UPDATE GLOSS-----------------------

const updateGloss = async (req, res) => {
  try {
    // Find all reports in the database
    const allG = await Gloss.find({});

    // Render the "reportdelete" EJS template with the data
    res.render('glossUpdate', { glosses: allG });
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database retrieval or rendering
    res.status(500).send("Internal Server Error");
  }
};
const showG = async (req, res) => {
  try {
    const glossId = req.params.glossId;
    // Find the specific gloss in the database by its ID
    const gloss = await Gloss.findById(glossId);
    // Render the "espGloss" EJS template with the gloss data
    res.render('espGloss', { gloss: gloss });
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database retrieval or rendering
    res.status(500).send("Internal Server Error");
  }
};
const updateGlosss = async (req, res, next) => {
  try {
    const glossId = req.params.glossId;
    // Find the specific gloss in the database by its ID
    const gloss = await Gloss.findById(glossId);

    // Update the gloss fields with the data from the form
    gloss.word = req.body.word;
    gloss.content = req.body.content;
    gloss.author = req.body.author;
    gloss.date = req.body.date;

    // Save the updated gloss to the database
    await gloss.save();
    
    // Redirect to the view page or any other appropriate route
    res.redirect(`/article/show/${glossId}`);
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database update or redirection
    res.status(500).send("Internal Server Error");
  }
};


// update TESTM

const updateTestm = async (req, res) => {
  try {
    // Find all reports in the database
    const allTestm = await Testm.find({});

    // Render the "reportdelete" EJS template with the data
    res.render('testmUpdate', { testm: allTestm });
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database retrieval or rendering
    res.status(500).send("Internal Server Error");
  }
};
const showT = async (req, res) => {
  try {
    const testm = await Testm.findById(req.params.testmId);
    console.log(testm); // Add this line to check the fetched object
    res.render("espTestm", { testm:testm });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while fetching the form.");
  }
};


// 



//-------------MEMBER DELETE------------------------


const formPostMember = async function (req, res) {
  try {
    const memberId = req.params.memberId;

    // Find the report in the database by its ID
    const memberToDelete = await Members.findById(memberId);
    if (!memberToDelete) {
      return res.status(404).send("Report not found");
    }

    // Delete the report from the database
    await memberToDelete.deleteOne();

    // Redirect the user back to the "/arch" page after successful deletion
    res.redirect("/ins");
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/ins");
  }
};

const formDGetMember = async (req, res) => {
  try {
    // Find all reports in the database
    const allMembers = await Members.find({});

    // Render the "reportdelete" EJS template with the data
    res.render('memberdelete', { member: allMembers });
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database retrieval or rendering
    res.status(500).send("Internal Server Error");
  }
};
//--------------------------------
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
  //----------------
const updateReport = async (req, res) => {
  try {
    // Find all reports in the database
    const allReports = await Reports.find({});

    // Render the "reportdelete" EJS template with the data
    res.render('reportUpdate', { report: allReports });
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database retrieval or rendering
    res.status(500).send("Internal Server Error");
  }
};
const showA = async (req, res) => {
  try {
    const reports = await Reports.findById(req.params.archId);
    console.log(reports); // Add this line to check the fetched object
    res.render("espReports", { reports:reports });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while fetching the form.");
  }
};
//------------------------------------------------------
const updateMmember = async (req, res) => {
  try {
    // Find all reports in the database
    const allMmeber = await Members.find({});

    // Render the "reportdelete" EJS template with the data
    res.render('memberUpdate', { member: allMmeber });
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database retrieval or rendering
    res.status(500).send("Internal Server Error");
  }
};


const showM = async (req, res) => {
  try {
    const member = await Members.findById(req.params.memberId);
    console.log(member); // Add this line to check the fetched object
    res.render("espMembros", { member:member });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while fetching the form.");
  }
};
const showN = async (req, res) => {
  try {
    const news = await News.findById(req.params.newsId);
    console.log(news); // Add this line to check the fetched object
    res.render("espNews", { news:news });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while fetching the form.");
  }
};
const showE = async (req, res) => {
  try {
    const event = await Events.findById(req.params.eventsId);
    console.log(event); // Add this line to check the fetched object
    res.render("espEvents", { event:event });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while fetching the form.");
  }
};

  module.exports = {
    showTeamEvent,
    profileTeam,
    profileNewsE,
   formGlos,
   showN,
   showE,
   formPost,
   formDGet,
   formDGloss,
   formPostGloss,
   formPostTestm,
   formDTestm,
   formDGetMember,
   formPostMember,
   formPostNews,
   formPostEvents,
   updateGloss,
   showG,
   updateGlosss,
   updateTestm,
   showT,
   updateReport,
   showA,
   updateMmember,
   showM
   

  };
  
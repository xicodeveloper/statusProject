const express = require('express');
const app = express();
const http = require('http').createServer(app);

// Set the port for the server
const port = process.env.PORT || 3030;
const mongoose = require("mongoose");
const News = require("./model/news")
const Events = require("./model/events")
const Member = require("./model/team")
const Glos = require("./model/glos")

const Reports = require("./model/reports")

const Link = require("./model/testm")


const Testm = require("./model/testm")

const multer = require('multer');
const path = require('path');
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder
const uploadFile = multer({ dest: 'arquivos/' }); // Specify the destination folder


//app config
app.set('view engine', 'ejs');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/arquivos', express.static(path.join(__dirname, 'arquivos')));

app.use(express.static(__dirname + '/public')); //para poder usar css externo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});
//--------------------------------------
// Define routes
const fs=require("fs")
const homeRoute = require("./routes/homeRoute");
const insreports = require("./routes/reportsRoute");

const projectRoute = require("./routes/projectRoute");
const teamRoute = require("./routes/teamRoute");
const newsRoute = require("./routes/newsRoute");
const agendaRoute = require("./routes/agendaRoute");
const stateg = require("./routes/stagegRoute");
const gameRoute = require("./routes/gameRoute");
const artRoute = require("./routes/artRoute");
const createartRoute = require("./routes/createArtRoute");
const testmRoute = require("./routes/testmRoute");
const archRoute = require("./routes/archiveRoute");
const createtestmRoute = require("./routes/createtestmRoute");
const artsample = require("./routes/articlesampleRoute");
const pagealt = require("./routes/pagendRoute");
const obj = require("./routes/objRoute");
const insNewEvRoute = require("./routes/insNewEvRoute");
const skateRoute = require("./routes/skateRoute");
const resoneRoute = require("./routes/resoneRoute");
const resdoisRoute = require("./routes/resdoisRoute");
const restresRoute = require("./routes/restresRoute");
const rescincoRoute = require("./routes/rescincoRoute");
const resquatroRoute = require("./routes/resquatroRoute");
const insRoute = require("./routes/insRoute");
const membernewRoute = require("./routes/membernewRoute");
const deleteReportRoute = require("./routes/deleteReportRoute");
const glossdelRoute = require("./routes/glossdelRoute");
const tesmdeleteRoute = require("./routes/tesmdeleteRoute");
const memberdeleteRoute = require("./routes/memberdeleteRoute");
const deleteinsRoute = require("./routes/deleteinsRoute");
const main = require("./routes/mainRoute");
const insertzRoute = require("./routes/insertzRoute");
const labRoute = require("./routes/labRoute");
















// Connect to MongoDB
mongoose.connect("mongodb+srv://xico:cqn0F9VdjdowvebX@cluster0.lyalupo.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to the database");
}).catch((error) => {
  console.log("Error connecting to the database:", error);
});

app.use(deleteinsRoute)
app.use(deleteReportRoute);
app.use(insRoute);
app.use(membernewRoute);
app.use(insreports);
app.use(labRoute)

app.use(glossdelRoute)
app.use(resquatroRoute);
app.use(restresRoute);
app.use(rescincoRoute);
app.use(resdoisRoute);
app.use(skateRoute);
app.use(homeRoute);
app.use(gameRoute);
app.use(main);

app.use(artRoute);
app.use(insertzRoute)
app.use(createtestmRoute);
app.use(resoneRoute);
app.use(agendaRoute);
app.use(projectRoute);
app.use(teamRoute);
app.use(newsRoute);
app.use(stateg);

app.use(createartRoute);
app.use(testmRoute);
app.use(archRoute);
app.use(artsample);
app.use(pagealt);
app.use(obj);
app.use(memberdeleteRoute)
app.use(insNewEvRoute);
app.use(tesmdeleteRoute)
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., CSS, JavaScript, images)
app.use(express.static('public'));
app.get("/getNews", async (req, res) => {
  try{
   const newsTitlesPipeline = [
      { $project: { title: 1, _id: 0 } },
    ];

    const evTitlesPipeline = [
      { $project: { title: 1, _id: 0 } },
    ];
    const [
      newsTitles,
      evTitles,
    ] = await Promise.all([
      News.aggregate(newsTitlesPipeline).exec(),
      Events.aggregate(evTitlesPipeline).exec(),
    ]);
    const newsTitlesArray = newsTitles.map((item) => item.title);
    const evTitlesArray = evTitles.map((item) => item.title);
    const allTitlesJSON = {
      newsTitles: newsTitlesArray,
      evTitles: evTitlesArray,

}  
res.json(allTitlesJSON); // Send the JSON data as a response
} catch (error) {
  console.error("Error:", error);
  res.status(500).send("An error occurred while fetching data.");
}

})
app.get("/getTitles", async (req, res) => {
  try {
    const allTitlesPipeline = [
      { $project: { title: "$member_name", _id: 0 } },
      { $group: { _id: null, titles: { $push: "$title" } } },
    ];

    const reportsTitlesPipeline = [
      { $project: { title: 1, _id: 0 } },
    ];

    const glosTitlesPipeline = [
      { $project: { word: 1, _id: 0 } },
    ];

    const newsTitlesPipeline = [
      { $project: { title: 1, _id: 0 } },
    ];

    const evTitlesPipeline = [
      { $project: { title: 1, _id: 0 } },
    ];

    const tetmTitlesPipeline = [
      { $project: { name: 1, _id: 0 } },
    ];

    const [
      allTitlesResult,
      reportsTitles,
      glosTitles,
      newsTitles,
      evTitles,
      testTitles,
    ] = await Promise.all([
      Member.aggregate(allTitlesPipeline).exec(),
      Reports.aggregate(reportsTitlesPipeline).exec(),
      Glos.aggregate(glosTitlesPipeline).exec(),
      News.aggregate(newsTitlesPipeline).exec(),
      Events.aggregate(evTitlesPipeline).exec(),
      Testm.aggregate(tetmTitlesPipeline).exec(),
    ]);

    const allTitlesArray = allTitlesResult.length > 0 ? allTitlesResult[0].titles : [];
    const reportsTitlesArray = reportsTitles.map((item) => item.title);
    const glosTitlesArray = glosTitles.map((item) => item.word);
    const newsTitlesArray = newsTitles.map((item) => item.title);
    const evTitlesArray = evTitles.map((item) => item.title);
    const tetmTitlesArray = testTitles.map((item) => item.name);

    const allTitlesJSON = {
      allTitles: allTitlesArray,
      reportsTitles: reportsTitlesArray,
      glosTitles: glosTitlesArray,
      newsTitles: newsTitlesArray,
      evTitles: evTitlesArray,
      testTitles: tetmTitlesArray,
      linkPossibleValues: [
        "team",
        "testimonies",
        "reports",
        "objetives",
        "results",
        "agenda",
        "project",
        "game",
        "skateholders",
        "news",
        "events",
      ],
    };

    res.json(allTitlesJSON); // Send the JSON data as a response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred while fetching data.");
  }
});


// Route handler for form submission
app.post('/insertnn/delete', async (req, res) => {
  const selectedOption = req.body.ne; // Use req.body.ne to get the selected option
  const ev = await Events.find({});
  const news = await News.find({});

  console.log('Selected option:', selectedOption);
  if (selectedOption === 'news') {
    res.render("deletenews", { news: news });
  } else {
    res.render("deleteevents", { ev: ev });
  }
});

app.post('/insertnnn/update', async (req, res) => {
  const selectedOption = req.body.ne; // Use req.body.ne to get the selected option
  const ev = await Events.find({});
  const news = await News.find({});

  console.log('Selected option:', selectedOption);
  if (selectedOption === 'news') {
    res.render("updatenews", { news: news });
  } else {
    res.render("updateevents", { ev: ev });
  }
});




app.post('/submit-form', (req, res) => {
  const selectedOption = req.body.ne;
  console.log('Selected option:', selectedOption);
  if (selectedOption === 'news') {
    res.render("news", { selectedOption: selectedOption });
  } else {
    res.render("events", { selectedOption: selectedOption });
  }
});
//------------------------------------------------------------------------
// Route handler for news submission
app.post('/submit-form/new', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const { author, content,title } = req.body;
    const date = req.body.date || new Date().toISOString();

    const filePath = 'uploads/' + file.filename;

    const news = await News.create({
      author: author,
      title:title,
      date: date,
      image: filePath,
      content: content
    });

    await news.save();
    res.redirect("/arch");
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/ins");
  }
});
//--------------------------------------------------------------
app.post('/submit-forms/new', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const { author, content, title } = req.body;
    const date = req.body.date || new Date().toISOString();

    const filePath = 'uploads/' + file.filename;

    const ev = await Events.create({
      author: author,
      date: date,
      image: filePath,
      content: content,
      title:title,
    });

    await ev.save();
    res.redirect("/arch");
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/ins");
  }
});

app.post('/testm/update/:testmId', upload.single('file'), async function(req, res) {
  try {
    const testmId = req.params.testmId;
    // Find the specific gloss in the database by its ID
    const testm = await Testm.findById(testmId);
    // Update the gloss fields with the data from the form
    
    // Define filePath with a default value
    let filePath = testm.image;

    // Check if a new file was uploaded
    if (req.file) {
      const file = req.file;
      filePath = 'uploads/' + file.filename;
    }

    // Update other fields
    testm.name = req.body.person;
    testm.content = req.body.content;
    testm.author = req.body.author;
    testm.place = req.body.place;
    testm.image = filePath;
    testm.data = req.body.date;

    // Save the updated gloss to the database
    await testm.save();
    
    // Redirect to the view page or any other appropriate route
    res.redirect(`/ins`);
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database update or redirection
    res.status(500).send("Internal Server Error");
  }
});
app.post('/event/update/:eventsId', upload.single('file'), async function(req, res) {
  try {
    const eventsId = req.params.eventsId;
    // Find the specific gloss in the database by its ID
    const events = await Events.findById(eventsId);
    // Update the gloss fields with the data from the form
    
    // Define filePath with a default value
    let filePath = events.image;

    // Check if a new file was uploaded
    if (req.file) {
      const file = req.file;
      filePath = 'uploads/' + file.filename;
    }

    // Update other fields
    events.author = req.body.person;
    events.date = req.body.date;
    events.content = req.body.content;
    events.title = req.body.title;

    events.image = filePath;
  

    // Save the updated gloss to the database
    await events.save();
    
    // Redirect to the view page or any other appropriate route
    res.redirect(`/ins`);
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database update or redirection
    res.status(500).send("Internal Server Error");
  }
});

app.post('/news/update/:newsId', upload.single('file'), async function(req, res) {
  try {
    const newsId = req.params.newsId;
    // Find the specific gloss in the database by its ID
    const news = await News.findById(newsId);
    // Update the gloss fields with the data from the form
    
    // Define filePath with a default value
    let filePath = news.image;

    // Check if a new file was uploaded
    if (req.file) {
      const file = req.file;
      filePath = 'uploads/' + file.filename;
    }

    // Update other fields
    news.author = req.body.person;
    news.date = req.body.date;
    news.content = req.body.content;
    news.title = req.body.title;

    news.image = filePath;
  

    // Save the updated gloss to the database
    await news.save();
    
    // Redirect to the view page or any other appropriate route
    res.redirect(`/ins`);
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database update or redirection
    res.status(500).send("Internal Server Error");
  }
});
app.post('/member/update/:memberId', upload.single('file'), async function(req, res) {
  try {
    const memberId = req.params.memberId;
    // Find the specific gloss in the database by its ID
    const member = await Member.findById(memberId);
    // Update the gloss fields with the data from the form
    
    // Define filePath with a default value
    let filePath = member.image;

    // Check if a new file was uploaded
    if (req.file) {
      const file = req.file;
      filePath = 'uploads/' + file.filename;
    }

    // Update other fields
    member.member_name = req.body.person;
    member.email = req.body.email;
    member.bio = req.body.content;
    member.member_function = req.body.fun;
    member.image = filePath;

    // Save the updated gloss to the database
    await member.save();
    
    // Redirect to the view page or any other appropriate route
    res.redirect(`/ins`);
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database update or redirection
    res.status(500).send("Internal Server Error");
  }
});

// Create the multer middleware using the storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'arquivos'); // The directory where files will be stored
  },
  filename: (req, file, cb) => {
    // Create a unique filename by appending the current timestamp to the original file name
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

// Create the multer middleware using the storage configuration
const uploadss = multer({ storage: storage });
// Define a route to handle the form submission and file upload

app.post('/arch/update/:reportId', uploadss.single('file'), async function(req, res) {
  try {
    const reportId = req.params.reportId;
    // Find the specific gloss in the database by its ID
    const report = await Reports.findById(reportId);
    // Update the gloss fields with the data from the form
    
    // Define filePath with a default value
    let filePath = report.file;

    // Check if a new file was uploaded
    if (req.file) {
      const file = req.file;
      filePath = 'arquivos/' + file.filename;
    }

    // Update other fields
    report.name = req.body.person;
    report.content = req.body.content;
    report.title = req.body.title;
    report.file = filePath;
    report.data = req.body.date;

    // Save the updated gloss to the database
    await report.save();
    
    // Redirect to the view page or any other appropriate route
    res.redirect(`/ins`);
  } catch (error) {
    console.log("ERROR:", error);
    // Handle any errors that occur during database update or redirection
    res.status(500).send("Internal Server Error");
  }
});
app.post('/arch/new', uploadss.single('file'), async (req, res) => {
  try {
    // Extract form data from the request
    const { title, person, content } = req.body;
    const date = req.body.date || new Date().toISOString();

    // Get the file information
    const file = req.file;
    const filePath = file ? 'arquivos/' + file.filename : null;

    // Create a new report using the extracted data
    const newReport = new Reports({
      title: title,
      name: person,
      content: content,
      file: filePath,
      data: date,
    });

    // Save the report to the database
    await newReport.save();

    // Redirect the user to the "/arch" page after successful submission
    res.redirect("/arch");
  } catch (error) {
    console.log("ERROR:", error);
    // Redirect the user to the "/ins" page if an error occurs
    res.redirect("/ins");
  }
});
app.post('/arch/delete/:reportId', async (req, res) => {
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
    res.redirect("/arch");
  } catch (error) {
    console.log("ERROR:", error);
    // Redirect the user to the "/ins" page if an error occurs
    res.redirect("/ins");
  }
});


app.post('/member/new', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;
    const { member_name, email, member_function, bio } = req.body;

    const filePath = 'uploads/' + file.filename;

    const member = await Member.create({
      member_name: member_name,
      email: email,
      member_function: member_function,
      bio: bio,
      image: filePath
    });

    await member.save();
    res.redirect("/"); // Redirect to the desired page after form submission
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/new"); // Redirect to the form page in case of an error
  }
});

// Route handler for testm submission
app.post('/testm/new', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const { author, person, content, place } = req.body;
    const date = req.body.date || new Date().toISOString();

    const filePath = 'uploads/' + file.filename;

    const testm = await Testm.create({
      author: author,
      date: date,
      name: person,
      place: place,
      image: filePath,
      content: content
    });

    await testm.save();
    res.redirect("/testm");
  } catch (error) {
    console.log("ERROR:", error);
    res.redirect("/");
  }
});

http.listen(port, function (error) {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log(`Application is running at: http://localhost:${port}`);
  }
});

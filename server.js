const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3030;
const mongoose = require("mongoose");
const News = require("./model/news")
const Events = require("./model/events")
const Member = require("./model/team")


const Testm = require("./model/testm")

const multer = require('multer');
const path = require('path');
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder

//app config
app.set('view engine', 'ejs');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.static(__dirname + '/public')); //para poder usar css externo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');

//--------------------------------------
// Define routes
const homeRoute = require("./routes/homeRoute");
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




// Connect to MongoDB
mongoose.connect("mongodb+srv://xico:cqn0F9VdjdowvebX@cluster0.lyalupo.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to the database");
}).catch((error) => {
  console.log("Error connecting to the database:", error);
});
app.use(insRoute);
app.use(membernewRoute);


app.use(resquatroRoute);
app.use(restresRoute);
app.use(rescincoRoute);
app.use(resdoisRoute);
app.use(skateRoute);
app.use(homeRoute);
app.use(gameRoute);
app.use(createtestmRoute);
app.use(resoneRoute);
app.use(agendaRoute);
app.use(projectRoute);
app.use(teamRoute);
app.use(newsRoute);
app.use(stateg);
app.use(artRoute);
app.use(createartRoute);
app.use(testmRoute);
app.use(archRoute);
app.use(artsample);
app.use(pagealt);
app.use(obj);
app.use(insNewEvRoute);

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., CSS, JavaScript, images)
app.use(express.static('public'));

// Route handler for form submission
app.post('/submit-form', (req, res) => {
  const selectedOption = req.body.ne;
  console.log('Selected option:', selectedOption);
  if (selectedOption === 'news') {
    res.render("news", { selectedOption: selectedOption });
  } else {
    res.render("events", { selectedOption: selectedOption });
  }
});

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
app.post('/search', upload.single('image'), async (req, res) => {
const searchKeyword=req.body.query ;
News.find({ $text: { $search: searchKeyword } })
  .then((results) => {
    console.log('Search Results:', results);
    if (results.length > 0) {
      const firstResultId = results[0]._id;
      res.redirect(`/news/${firstResultId}`);
    } else {
      // Handle case when no results are found
      res.redirect('/');
    }
  })
  .catch((error) => {
    console.error('Error performing search:', error);
  });
})
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

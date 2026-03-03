// Import the express module
import express from 'express';


// Create an instance of an Express application
const app = express();

// ejs
app.set('view engine', 'ejs');

// Define the port number where our server will listen
const PORT = 3004;

//allow express to parse incoming req
app.use(express.urlencoded({ extended: true }));

//storing submissions
const entries = []; //

//enable static file serving
app.use(express.static('public'));

// main homepage
app.get('/', (req, res) => {
  res.render('home');
});

//

// form submissions sent to JSON object
app.post('/submit', (req, res) => {

  const entry = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    company: req.body.company,
    job: req.body['job-title'],
    linkedin: req.body.linkedin,
    meet: req.body.meet,
    message: req.body.message,
    mail_function: req.body.mail_function,
    timestamp: new Date()

  }

  entries.push(entry);

res.render('confirmation', { entry })

});

//admin route
app.get('/admin', (req, res) => {
  res.render('admin', { entries })
});

// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
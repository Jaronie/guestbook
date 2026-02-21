// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

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
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//

// form submissions sent to JSON object
app.post('/submit', (req, res) => {

  const entry = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    company: req.body.company,
    job: req.body.job_title,
    linkedin: req.body.linkedin,
    meet: req.body.meet,
    mail_function: req.body.mail_function

  }

  entries.push(entry);

  res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

//admin route
app.get('/admin', (req, res) => {
  res.send(entries)
});;

// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
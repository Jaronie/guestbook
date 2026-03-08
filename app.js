// Import the express module
import express from 'express';

import mysql2 from 'mysql2';

import dotenv from 'dotenv';

//config dotenv
dotenv.config();

// create a connection pool with mySQL
const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}).promise();


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
    mail_function: req.body['form-type'],
    timestamp: new Date()

  }

  entries.push(entry);

res.render('confirmation', { entry })

});

//admin route
app.get('/admin', async (req, res) => {
      try {
    const [orders] = await pool.query('SELECT * FROM submissions');
    // render admin page
    res.render('admin', { entries : orders });
    console.log("Database Connected!")
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Database error: ' + err.message);
  res.render('admin', { entries })
  }
});

// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
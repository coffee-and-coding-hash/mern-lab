const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files (HTML)
app.use(express.static(path.join(__dirname)));

// Middleware to parse URL-encoded data (POST)
app.use(express.urlencoded({ extended: true }));

// GET method handler
app.get('/submit-get', (req, res) => {
  const name = req.query.name;
  const branch = req.query.branch;
  const semester = req.query.semester;

  const htmlResponse = `
    <h2>Student Information (GET)</h2>
    <p>Name: <b>${name}</b></p>
    <p>Branch: <u>${branch}</u></p>
    <p>Semester: ${semester}</p>
    <br>
    <a href="/">Go Back</a>
  `;

  res.send(htmlResponse);
});

// POST method handler
app.post('/submit-post', (req, res) => {
  const name = req.body.name;
  const branch = req.body.branch;
  const semester = req.body.semester;

  const htmlResponse = `
    <h2>Student Information (POST)</h2>
    <p>Name: <b>${name}</b></p>
    <p>Branch: <u>${branch}</u></p>
    <p>Semester: ${semester}</p>
    <br>
    <a href="/">Go Back</a>
  `;

  res.send(htmlResponse);
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  console.log(`Open your browser and navigate to http://localhost:3000/index.html`);
});

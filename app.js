const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/register', (req, res) => res.render('register'));
app.get('/search', (req, res) => res.render('search'));
app.get('/request', (req, res) => res.render('request'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/dashboard', (req, res) => res.render('dashboard', {
  donorCount: 0,
  requestCount: 0,
  contactCount: 0
}));

// Start Server
app.listen(PORT, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});


//npm start to run this project 

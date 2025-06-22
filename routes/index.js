const express = require('express');
const router = express.Router();
const conn = require('../models/db');

// Home
router.get('/', (req, res) => res.render('index'));

// Register Donor
router.get('/register', (req, res) => res.render('register'));
router.post('/register', (req, res) => {
const donor = req.body;
conn.query('INSERT INTO donors SET ?', donor, (err) => {
if (err) throw err;
res.send('Registration Successful');
});
});
// Search Donors
router.get('/search', (req, res) => res.render('search'));
router.post('/search', (req, res) => {
const { blood_group, location } = req.body;
conn.query('SELECT * FROM donors WHERE blood_group=? AND (city LIKE ? OR state LIKE ?)',
[blood_group, %${location}%, %${location}%],
(err, results) => {
if (err) throw err;
res.render('search', { results });
});
});

// Request Blood
router.get('/request', (req, res) => res.render('request'));
router.post('/request', (req, res) => {
const requestData = req.body;
conn.query('INSERT INTO blood_requests SET ?', requestData, (err) => {
if (err) throw err;
res.send('Request submitted successfully');
});
});

// Contact
router.get('/contact', (req, res) => res.render('contact'));
router.post('/contact', (req, res) => {
const contactData = req.body;
conn.query('INSERT INTO contacts SET ?', contactData, (err) => {
if (err) throw err;
res.send('Message sent');
});
});

// Admin Dashboard
router.get('/dashboard', (req, res) => {
conn.query('SELECT COUNT() as donors FROM donors', (err, donors) => {
conn.query('SELECT COUNT() as requests FROM blood_requests', (err, requests) => {
conn.query('SELECT COUNT(*) as messages FROM contacts', (err, messages) => {
res.render('dashboard', {
donorCount: donors[0].donors,
requestCount: requests[0].requests,
contactCount: messages[0].messages
});
});
});
});
});
module.exports = router;


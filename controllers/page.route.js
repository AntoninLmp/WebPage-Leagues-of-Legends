// controllers/hello.route.js
const express = require('express');
const router = express.Router();

// http://localhost:9000/
router.get('/', (req, res) => {
    res.redirect("/home");
});

router.get('/home', (req, res) => {
    res.render("home");
});

router.get('/team', (req, res) => {
    res.render("team")
});
/* router.get('/champions', (req, res) => {
    res.render("champions")
}); */
router.get('/aboutUs', (req, res) => {
    res.render("aboutUs")
});

router.get('/store', (req, res) => {
    res.render("store")
});


module.exports = router;
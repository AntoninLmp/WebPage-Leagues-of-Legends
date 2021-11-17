const express = require('express')
const router = express.Router()

router.get('/aboutUs', (req, res) => {
    res.render('aboutUs')
})
router.get('/champions', (req, res) => {
    res.render('champions')
})
router.get('/home', (req, res) => {
    res.render('home')
})
router.get('/team', (req, res) => {
    res.render('team')
})


/* app.post('/top', function(req, res) {
    console.log(req.body.todo + " is added to top of the list.");
    res.redirect('/');
}); */




module.exports = router
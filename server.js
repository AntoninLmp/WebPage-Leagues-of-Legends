const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
app.listen(process.env.WEB_PORT,
    function() { console.log("Listening on " + process.env.WEB_PORT) })

app.set("view engine", "ejs")
app.set("views", "views")
    //MIDDLEWARE REGISTRATION
    //app.use(callback1, callback2, callback3)
    //app.use(routeBase, callbak)
    //inutile enfin a voir comment mieux faire
    /* app.use("/site", require("./controllers/pages.routes")) */

app.get('/aboutUs', (req, res) => {
    res.render('pages/aboutUs')
})
app.get('/champions', (req, res) => {
    res.render('pages/champions')
})
app.get('/', (req, res) => {
    res.render('pages/home')
})
app.get('/team', (req, res) => {
    res.render('pages/team')
})



const bodyParser = require("body-parser")
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))
app.use("/static", express.static(__dirname + '/static'))
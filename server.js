const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
app.listen(process.env.WEB_PORT,
    function() { console.log("Listening on " + process.env.WEB_PORT) })
app.get('/', (req, res) => {
    res.render('home.ejs')
})



app.set("view engine", "ejs")
app.set("views", "views")
    //MIDDLEWARE REGISTRATION
    //app.use(callback1, callback2, callback3)
    //app.use(routeBase, callbak)
app.use("/hello", require("./controllers/hello.route"))
    //inutile enfin a voir comment mieux faire
app.use("/site", require("./controllers/pages.routes"))

const bodyParser = require("body-parser")
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))
app.use("/static", express.static(__dirname + '/static'))
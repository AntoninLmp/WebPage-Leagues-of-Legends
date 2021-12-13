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

router.get('/aboutUs', (req, res) => {
    res.render("aboutUs")
});


// // LOG IN 
// const auth = require("../utils/users.auth");
// const userRepository = require("../utils/usersRepository");

// // router.get("/user", auth.checkAuthentification("USER"), userAction);
// router.get("/admin", auth.checkAuthentification("ADMIN"), adminAction);


// async function adminAction(request, response) {
//     let dataOfUser = await userRepository.getOneUser(request.user.user_name);
// }


module.exports = router;
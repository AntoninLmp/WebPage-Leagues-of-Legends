      const express = require('express');
      const router = express.Router();
      const championsRepo = require('../utils/championsRepository');

      router.get('/', championRootAction);
      router.get('/list', listCampions);

      // http://localhost:9000/champions
      function championRootAction(request, response) {
          response.redirect("/champions/list");
      }

      async function listCampions(request, response) {

          var champions = await championsRepo.getAllChampions()
          console.log(champions)
          var flashMessage = request.session.flashMessage;
          request.session.flashMessage = ""

          response.render("champions", { "champions": champions, "flashMessage": flashMessage });

      }

      module.exports = router;
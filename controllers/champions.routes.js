      const express = require('express');
      const router = express.Router();
      const championsRepo = require('../utils/championsRepository');

      router.get('/', championRootAction);
      router.get('/list', listCampions);
      router.get('/:championCategory', listOneCategorychampion);

      // http://localhost:9000/champions
      function championRootAction(request, response) {
          response.redirect("champions/list");
      }

      async function listCampions(request, response) {

          var champions = await championsRepo.getAllChampions()
          var flashMessage = request.session.flashMessage;
          request.session.flashMessage = ""

          response.render("champions", { "champions": champions, "flashMessage": flashMessage });
      }

      async function listOneCategorychampion(request, response) {
          var champions = await championsRepo.getCategoryChampion(request.params.championCategory);
          response.render("champions", { "champions": champions });
      }

      module.exports = router;
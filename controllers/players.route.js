const express = require('express')
const router = express.Router()
const playersRepo = require('../utils/players.repository')
const championsRepo = require('../utils/champions.repository')


router.get('/', playersRootAction)
router.get('/list', listplayers)
router.get('/edit/:playerId', playersEditAction)
    /* router.get('/del/:playersId', playersDelAction) */
router.post('/update/:playerId', playerUpdateAction)


// http://localhost:9000/players
function playersRootAction(request, response) {
    response.redirect("/players/list")
}

async function listplayers(request, response) {
    let players = await playersRepo.getAllPlayers()
    response.render("players", { "players": players })
}

async function playersEditAction(request, response) {
    console.log(request.params.playerId)
    if (request.params.playerId == 0) {
        var onePlayer = playersRepo.getBlankPlayer();
        var tableChampions = "editor"
    } else {
        var onePlayer = await playersRepo.getOnePLayer(request.params.playerId)
        var tableChampions = await championsRepo.getAllChampions()
    }
    response.render("edit_player", { "player": onePlayer, "champions": tableChampions })
}

async function playerUpdateAction(request, response) {
    if (request.params.playerId === "0") {
        var numRows = await playersRepo.addOnePlayer(request.body.player_firstName, request.body.player_lastName, request.body.player_pseudo, request.body.player_country, request.body.player_team, request.body.player_favCaract, request.body.player_role)
    } else {
        var numRows = await playersRepo.editOnePlayer(request.body.player_firstName, request.body.player_lastName, request.body.player_pseudo, request.body.player_country, request.body.player_team, request.body.player_favCaract, request.body.player_role, request.params.playerId)
    }

    request.session.flashMessage = "ROWS UPDATED: " + numRows;
    response.redirect("/players/list");
}
async function teamDelAction(request, response) {
    let numRows = await playersRepo
    request.session.flashMessage = "ROWS DELETED: " + numRows;
    response.redirect("/team/list");
}

module.exports = router
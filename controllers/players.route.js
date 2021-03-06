const express = require('express')
const router = express.Router()
const playersRepo = require('../utils/players.repository')
const championsRepo = require('../utils/champions.repository')
const teamRepository = require('../utils/team.repository')


router.get('/', playersRootAction)
router.get('/list', listplayers)
router.get('/edit/:playerId', playersEditAction)
router.get('/del/:playerId', playerDelAction)
router.get('/show/:playerId', playerShowAction)
router.post('/update/:playerId', playerUpdateAction)


// http://localhost:9000/players
function playersRootAction(request, response) {
    response.redirect("/players/list")
}

async function listplayers(request, response) {
    var players = await playersRepo.getAllPlayers()
    var tableChampions = await championsRepo.getAllChampions()
    var tableTeam = await teamRepository.getAllTeam()
    response.render("players", { "players": players, "champions": tableChampions, "teams": tableTeam })
}

async function playersEditAction(request, response) {
    console.log(request.params.playerId)
    if (request.params.playerId == 0) {
        var onePlayer = playersRepo.getBlankPlayer();
    } else {
        var onePlayer = await playersRepo.getOnePLayer(request.params.playerId)
    }
    var tableChampions = await championsRepo.getAllChampions()
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
async function playerDelAction(request, response) {
    let numRows = await playersRepo.delOnePlayer(request.params.playerId)
    request.session.flashMessage = "ROWS DELETED: " + numRows;
    response.redirect("/players/list");
}

async function playerShowAction(request, response) {
    var player = await playersRepo.getOnePLayer(request.params.playerId);
    var champions = await championsRepo.getAllChampions();
    response.render("player_show", { "onePlayer": player, "champions": champions });
}
module.exports = router
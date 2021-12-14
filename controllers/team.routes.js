const express = require('express')
const router = express.Router()
const teamRepo = require('../utils/team.repository')
const playersRepo = require('../utils/players.repository')

router.get('/', teamRootAction)
router.get('/list', listTeam)
router.get('/edit/:teamId', teamEditAction)
router.get('/del/:teamId', teamDelAction)
router.post('/update/:teamId', teamUpdateAction)


// http://localhost:9000/team
function teamRootAction(request, response) {
    response.redirect("/team/list")
}

async function listTeam(request, response) {
    var teams = await teamRepo.getAllTeam()
    var player = await playersRepo.getAllPlayers()
    response.render("team", { "teams": teams, "player": player })
}
async function teamEditAction(request, response) {
    if (request.params.teamId == 0) {
        var team = await teamRepo.getBlankTeam(request.params.teamId);
        var allPlayers = "editor"
    } else {
        var team = await teamRepo.getOneTeam(request.params.teamId)
        var allPlayers = await playersRepo.getAllPlayers()
    }
    response.render("edit_team", { "OneTeam": team, "players": allPlayers })
}
async function teamUpdateAction(request, response) {
    if (request.params.teamId === "0") {
        var numRows = await teamRepo.addOneTeam(request.body.team_name, request.body.team_victory, request.body.team_defeat, request.body.team_continent, 1, 2, 3, 4, 5);
    } else {
        var numRows = await teamRepo.editOneTeam(request.params.teamId, request.body.team_name, request.body.team_victory, request.body.team_defeat, request.body.team_continent, 1, 2, 3, 4, 5);
    }

    request.session.flashMessage = "ROWS UPDATED: " + numRows;
    response.redirect("/team/list");
}

async function teamDelAction(request, response) {
    var numRows = await teamRepo.delOneTeam(request.params.teamId);
    request.session.flashMessage = "ROWS DELETED: " + numRows;
    response.redirect("/team/list");
}

module.exports = router
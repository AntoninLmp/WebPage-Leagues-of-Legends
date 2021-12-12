const express = require('express')
const router = express.Router()
const teamRepo = require('../utils/team.repository')

router.get('/', teamRootAction)
router.get('/list', listTeam)

// http://localhost:9000/team
function teamRootAction(request, response) {
    response.redirect("team/list")
}

async function listTeam(request, response) {
    var teams = await teamRepo.getAllTeam()
    response.render("team", { "teams": teams })
}

module.exports = router
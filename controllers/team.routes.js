const express = require('express')
const router = express.Router()
const teamRepo = require('../utils/team.repository')

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
    var player = await teamRepo.getAllPlayers()
    response.render("team", { "teams": teams, "player": player })
}
async function teamEditAction(request, response) {
    if (request.params.teamId == 0) {
        var team = await teamRepo.getBlankTeam(request.params.teamId);
        var allPlayers = "editor"
    } else {
        var team = await teamRepo.getOneTeam(request.params.teamId)
        var allPlayers = await teamRepo.getAllPlayers()
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

/*
async function carShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneCar = await carRepo.getOneCar(request.params.carId);
    response.render("cars_show", { "oneCar": oneCar });
}
async function carEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await carRepo.getAllBrands();
    var carId = request.params.carId;
    if (carId !== "0")
        var car = await carRepo.getOneCar(carId);
    else
        var car = carRepo.getBlankCar();
    response.render("cars_edit", { "oneCar": car, "brands": brands });
}
async function carDelAction(request, response) {
    // response.send("DEL ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await carRepo.delOneCar(request.params.carId);
    request.session.flashMessage = "ROWS DELETED: " + numRows;
    response.redirect("/cars/list");
}
async function carUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var carId = request.params.carId;
    if (carId === "0") carId = await carRepo.addOneCar(request.body.car_brand);
    var isFancy = request.body.car_isFancy === undefined ? 0 : 1;
    var numRows = await carRepo.editOneCar(carId,
        request.body.car_brand,
        request.body.car_name,
        request.body.car_baseprice,
        isFancy,
        request.body.car_realPrice);

    request.session.flashMessage = "ROWS UPDATED: " + numRows;
    response.redirect("/cars/list");
}
*/
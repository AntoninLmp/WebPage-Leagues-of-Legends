const express = require('express')
const router = express.Router()
const teamRepo = require('../utils/team.repository')

router.get('/', teamRootAction)
router.get('/list', listTeam)
router.get('/edit/:teamId', teamEditAction)
router.post('/update/:teamId', teamUpdate)
router.get('/del/:teamId', teamDelAction)


// http://localhost:9000/team
function teamRootAction(request, response) {
    response.redirect("/team/list")
}

async function listTeam(request, response) {
    var teams = await teamRepo.getAllTeam()
    response.render("team", { "teams": teams })
}
async function teamEditAction(request, response) {
    var team = await teamRepo.getOneTeam(request.params.teamId)
    var allPlayers = await teamRepo.getAllPlayers()
    response.render("edit_team", { "OneTeam": team, "players": allPlayers })
}

async function teamUpdate(request, response) {
    var teamId = request.params.teamId;
    //if (teamId === "0") teamId = await teamRepo.addOneTeam(request.body.car_brand);
    var numRows = await teamRepo.editOneTeam(teamId,
        request.body.team_name,
        request.body.team_victory,
        request.body.team_defeat,
        request.body.team_continent,
        request.body.player_top,
        request.body.player_mid,
        request.body.player_adc,
        request.body.player_support);
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
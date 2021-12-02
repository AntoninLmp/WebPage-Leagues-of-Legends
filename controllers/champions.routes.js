const express = require('express')
const router = express.Router()
const championsRepo = require('../utils/championsRepository')

router.get('/', championRootAction)
router.get('/list', listCampions)
router.get('/:championCategory', listOneCategorychampion)
router.get('/show/:championId', showOneChampion)
router.get('/choose/:championId1/:category', chooseChampion)
router.get('/compare/:championId1/:championId2', compareChampion)


// http://localhost:9000/champions
function championRootAction(request, response) {
    response.redirect("champions/list")
}

async function listCampions(request, response) {

    var champions = await championsRepo.getAllChampions()
    var flashMessage = request.session.flashMessage
    request.session.flashMessage = ""

    response.render("champions", { "champions": champions, "flashMessage": flashMessage })
}

async function listOneCategorychampion(request, response) {
    var champions = await championsRepo.getCategoryChampion(request.params.championCategory)
    response.render("champions", { "champions": champions })

}

async function showOneChampion(request, response) {
    var championId = request.params.championId
    if (championId !== "0") {
        var champion = await championsRepo.getOneChampion(championId)

    } else {
        var champion = carRepo.getChampionModel()
    }

    response.render("show_champions", { "champion": champion })
}

async function chooseChampion(request, response) {

    switch (request.params.championId) {
        case "all":
            var champions = await championsRepo.getAllChampions()
            break;
        case "fighter":
            var champions = await championsRepo.getCategoryChampion("Fighter")
            break;
        case "mage":
            var champions = await championsRepo.getCategoryChampion("Mage")
            break;
        case "assassin":
            var champions = await championsRepo.getCategoryChampion("Assassin")
            break;
        case "tank":
            var champions = await championsRepo.getCategoryChampion("Tank")
            break;
        case "marksman":
            var champions = await championsRepo.getCategoryChampion("Marksman")
            break;
        case "support":
            var champions = await championsRepo.getCategoryChampion(Support)
            break;
        default:
            var champions = await championsRepo.getAllChampions()
            break;
    }
    var championId1 = request.params.championId1
    if (championId1 !== "0") {
        var champion1 = await championsRepo.getOneChampion(championId1)
    } else {
        var champion1 = carRepo.getChampionModel()
    }
    response.render("choose_champion", { "champions": champions, "champion1": champion1 })
}

async function compareChampion(request, response) {
    var championId1 = request.params.championId1
    var championId2 = request.params.championId2
    var champions = []
    if (championId1 !== "0" && championId2 !== "0") {
        var champion1 = await championsRepo.getOneChampion(championId1)
        var champion2 = await championsRepo.getOneChampion(championId2)
    } else {
        var champion1 = carRepo.getChampionModel()
        var champion2 = carRepo.getChampionModel()
    }
    champions.push([champion1, champion2])


    response.render("compare_champions", { "champion1": champion1, "champion2": champion2 })
}
module.exports = router
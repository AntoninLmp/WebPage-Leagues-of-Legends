const express = require('express')
const router = express.Router()
const figurineRespo = require('../utils/figurineRepository')
const historyRepo = require('../utils/history.repository')

router.get('/', figurineRootAction)
router.get('/figurine', listFigurine)

router.get('/figurine/buy:idFigurine', deleteOnQuantityFigurine)
router.get('/figurine/sell:idFigurine', addOnQuantityFigurine)

router.get('/figurine/edit:idHistory', editOneHistory)
router.get('/figurine/show:idHistory', showOneHistory)
router.post('/figurine/update:idHistory', updateOneHistory)
router.get('/figurine/delete:idHistory', deleteOneHistory)

function figurineRootAction(request, response) {
    response.redirect("store/figurine")
}
async function listFigurine(request, response) {
    // LOAD figurine
    var figurine = await figurineRespo.getAllFigurine()
    var flashMessage = request.session.flashMessage
    request.session.flashMessage = ""
    // LOAD history
    var history = await historyRepo.getAllhistory()
    response.render("store", { "store": figurine, "flashMessage": flashMessage, "history": history })
}

async function deleteOnQuantityFigurine(request, response) {
    var figurineId = request.params.idFigurine
    var oneFigurine = await figurineRespo.getOneFigurine(figurineId)
    console.log(oneFigurine)
    if (figurineId !== "0") {
        var figurine = await figurineRespo.updateQuantityLessThanOne(figurineId)
        var history = await historyRepo.addOneHistory(oneFigurine.pop_name, oneFigurine.pop_price, "BUY")
        history = await historyRepo.getAllhistory()
    }
    response.render("store", { "store": figurine, "history": history })
}

async function addOnQuantityFigurine(request, response) {
    var figurineId = request.params.idFigurine
    var oneFigurine = await figurineRespo.getOneFigurine(figurineId)
    if (figurineId !== "0") {
        var figurine = await figurineRespo.updateQuantityMoreOne(figurineId)
        var history = await historyRepo.addOneHistory(oneFigurine.pop_name, oneFigurine.pop_price, "SELL")
        history = await historyRepo.getAllhistory()
    }
    response.render("store", { "store": figurine, "history": history })
}

// HISTORY
async function showOneHistory(request, response) {
    var allHistory = await historyRepo.getAllhistory()
    if (request.params.idHistory !== "0") {
        var history = await historyRepo.getOneHistory(request.params.idHistory)
    } else {
        var history = await historyRepo.getHistoryModel();
    }
    console.log(history)
    response.render("history_show", { "oneHistory": history, "allHistory": allHistory })
}

async function editOneHistory(request, response) {
    var allHistory = await historyRepo.getAllhistory()
    if (request.params.idHistory !== "0") {
        var history = await historyRepo.getOneHistory(request.params.idHistory)
    } else {
        var history = await historyRepo.getHistoryModel();
    }
    console.log(history)
    response.render("history_edit", { "oneHistory": history, "allHistory": allHistory })
}

async function deleteOneHistory(request, response) {
    var historyID = request.params.idHistory
    if (historyID !== "0") {
        var history = await historyRepo.deleteOneHistory(historyID)
    }
    response.redirect("/store/figurine")
}

async function updateOneHistory(request, response) {
    var historyID = request.params.idHistory
    if (historyID !== "0") {
        console.log("--> ", request.body)
        var history = await historyRepo.editOneHistory(historyID, request.body.history_name, request.body.history_price, request.body.history_date, request.body.history_state)
    }
    response.redirect("/store/figurine")
}
module.exports = router
const express = require('express')
const router = express.Router()
const figurineRespo = require('../utils/figurineRepository')

router.get('/', figurineRootAction)
router.get('/figurine', listFigurine)
router.get('/figurine/:idFigurine', updateFigurine)

function figurineRootAction(request, response) {
    response.redirect("store/figurine")
}
async function listFigurine(request, response) {
    var figurine = await figurineRespo.getAllFigurine()
    var flashMessage = request.session.flashMessage
    request.session.flashMessage = ""
    response.render("store", { "store": figurine, "flashMessage": flashMessage })
}
async function updateFigurine(request, response) {
    var figurineId = request.params.idFigurine
    if (figurineId !== "0") {
        var figurine = await figurineRespo.updateQuantityLessThanOne(figurineId)
    }
    response.render("store", { "store": figurine })
}

module.exports = router
const express = require('express')
const router = express.Router()
const figurineRespo = require('../utils/figurineRepository')

router.get('/', figurineRootAction)
router.get('/figurine', listFigurine)

function figurineRootAction(request, response) {
    response.redirect("store/figurine")
}
async function listFigurine(request, response) {
    var figurine = await figurineRespo.getAllFigurine()
    var flashMessage = request.session.flashMessage
    request.session.flashMessage = ""
    response.render("store", { "store": figurine, "flashMessage": flashMessage })
}

module.exports = router
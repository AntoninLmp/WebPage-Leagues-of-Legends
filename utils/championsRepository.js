// Chargement de tout les personnages
/* function chargerPersonnage(roleCombattant, nomCombattant) {
    fetch('champions.json')
        .then(response => response.json())
        .then(function(data) {

            let allPerso = document.getElementById("personnage")
            let comparePerso = document.getElementById("champion")
            allPerso.style.display = ""
            comparePerso.style.display = "none"
                //effacer les recherches precedentes
            while (allPerso.firstChild) {
                allPerso.removeChild(allPerso.firstChild)
            }
            while (comparePerso.firstChild) {
                comparePerso.removeChild(comparePerso.firstChild)
            }

            //charger les nouveaux perso
            data.forEach(element => {
                if (roleCombattant !== "") { //charger par role
                    if (element.tags.includes(roleCombattant)) {
                        let perso = document.createElement("div")

                        let nomImg = element.icon

                        let btn = document.createElement("input")
                        btn.type = "image"
                        btn.src = nomImg
                        btn.id = element.name

                        btn.onclick = function() {
                            reset_color()
                            let tablePerso = document.createElement("table")
                            creerTable(allPerso, tablePerso)
                            chargerOne(allPerso, comparePerso, element, tablePerso)
                            let btnComparer = document.createElement("button")
                            btnComparer.textContent = "Comparer"
                            comparePerso.appendChild(btnComparer)

                            btnComparer.onclick = function() {
                                comparePerso.removeChild(btnComparer)
                                chargerChoix(allPerso, comparePerso, perso, tablePerso)
                            }
                        }

                        perso.appendChild(btn)
                        allPerso.appendChild(perso)
                    }
                } else if (nomCombattant !== "") { //charger par nom 
                    if (nomCombattant === element.name) {
                        let perso = document.createElement("div")

                        let nomImg = element.icon

                        let btn = document.createElement("input")
                        btn.type = "image"
                        btn.src = nomImg
                        btn.id = element.name

                        btn.onclick = function() {
                            reset_color()
                            let tablePerso = document.createElement("table")
                            creerTable(allPerso, tablePerso)
                            chargerOne(allPerso, comparePerso, element, tablePerso)
                            let btnComparer = document.createElement("button")
                            btnComparer.textContent = "Comparer"
                            comparePerso.appendChild(btnComparer)

                            btnComparer.onclick = function() {
                                comparePerso.removeChild(btnComparer)
                                chargerChoix(allPerso, comparePerso, perso, tablePerso)
                            }
                        }

                        perso.appendChild(btn)
                        allPerso.appendChild(perso)
                    }

                } else { //tout charger
                    let perso = document.createElement("div")

                    let nomImg = element.icon

                    let btn = document.createElement("input")
                    btn.type = "image"
                    btn.src = nomImg
                    btn.id = element.name

                    btn.onclick = function() {
                        reset_color()
                        let tablePerso = document.createElement("table")
                        creerTable(allPerso, tablePerso)
                        chargerOne(allPerso, comparePerso, element, tablePerso)
                        let btnComparer = document.createElement("button")
                        btnComparer.textContent = "Comparer"
                        comparePerso.appendChild(btnComparer)

                        btnComparer.onclick = function() {
                            comparePerso.removeChild(btnComparer)
                            chargerChoix(allPerso, comparePerso, perso, tablePerso)
                        }
                    }

                    perso.appendChild(btn)
                    allPerso.appendChild(perso)
                }
            })

        })

} */

/* // Recuperation des données dans le fichier Json
function chargerChoix(allPerso, comparePerso, perso, tablePerso) {
    fetch('champions.json')
        .then(response => response.json())
        .then(function(data) {
            allPerso.style.display = ""
            comparePerso.style.display = "none"
                //effacer les recherches precedentes
            while (allPerso.firstChild) {
                allPerso.removeChild(allPerso.firstChild)
            }

            //charger le nouveau perso
            data.forEach(element => {

                let nomImg = element.icon

                let btn = document.createElement("input")
                btn.type = "image"
                btn.src = nomImg
                btn.id = element.name

                btn.onclick = function() {
                    reset_color()
                    chargerOne(allPerso, comparePerso, element, tablePerso)
                }

                perso.appendChild(btn)
                allPerso.appendChild(perso)

            })
        })

}

// CREATION D'UNE TABLE DE DONNEE
function creerTable(allPerso, tablePerso) {
    let ligne1 = document.createElement("tr")
    let icon = document.createElement("td")
    icon.textContent = "Icon"
    ligne1.appendChild(icon)

    let ligne2 = document.createElement("tr")
    let nom = document.createElement("td")
    nom.textContent = "Nom"
    ligne2.appendChild(nom)

    let ligne3 = document.createElement("tr")
    let titre = document.createElement("td")
    titre.textContent = "Titre"
    ligne3.appendChild(titre)

    let ligne4 = document.createElement("tr")
    let role = document.createElement("td")
    role.textContent = "Role"
    ligne4.appendChild(role)

    let ligne5 = document.createElement("tr")
    let hp = document.createElement("td")
    hp.textContent = "Hp"
    ligne5.appendChild(hp)

    let ligne6 = document.createElement("tr")
    let armor = document.createElement("td")
    armor.textContent = "Armor"
    ligne6.appendChild(armor)

    let ligne7 = document.createElement("tr")
    let attarange = document.createElement("td")
    attarange.textContent = "Attaque Range"
    ligne7.appendChild(attarange)

    // Ajout de toutes les lignes
    tablePerso.appendChild(ligne1)
    tablePerso.appendChild(ligne2)
    tablePerso.appendChild(ligne3)
    tablePerso.appendChild(ligne4)
    tablePerso.appendChild(ligne5)
    tablePerso.appendChild(ligne6)
    tablePerso.appendChild(ligne7)

    allPerso.appendChild(tablePerso)

}

function remplirTable(div1, div2, tablePerso, element) {

    let lignes = tablePerso.childNodes

    let icon = document.createElement("td")
    let image = document.createElement("img")
    image.src = element.icon
    icon.appendChild(image)
    lignes[0].appendChild(icon)

    let nom = document.createElement("td")
    nom.textContent = element.name
    lignes[1].appendChild(nom)

    let titre = document.createElement("td")
    titre.textContent = element.title
    lignes[2].appendChild(titre)

    let role = document.createElement("td")
    role.textContent = element.tags
    lignes[3].appendChild(role)

    let hp = document.createElement("td")
    hp.textContent = element.stats.hp
    lignes[4].appendChild(hp)

    let armor = document.createElement("td")
    armor.textContent = element.stats.armor
    lignes[5].appendChild(armor)

    let attackrange = document.createElement("td")
    attackrange.textContent = element.stats.attackrange
    lignes[6].appendChild(attackrange)

}

function chargerOne(div1, div2, element, tablePerso) {
    div1.style.display = "none"
    div2.style.display = ""
    remplirTable(div1, div2, tablePerso, element)

    div2.appendChild(tablePerso)
}



window.onload = function() {
    chargerPersonnage("", "")
    btnTout.style.borderBottom = "solid white"
    btnTout.style.color = "rgb(170, 124, 37)"
}

function reset_color() {
    btnTout.style.borderBottom = "transparent"
    btnTout.style.color = "white"
    btnAssassins.style.borderBottom = "transparent"
    btnAssassins.style.color = "white"
    btnCombattants.style.borderBottom = "transparent"
    btnCombattants.style.color = "white"
    btnMages.style.borderBottom = "transparent"
    btnMages.style.color = "white"
    btnTireurs.style.borderBottom = "transparent"
    btnTireurs.style.color = "white"
    btnSupports.style.borderBottom = "transparent"
    btnSupports.style.color = "white"
    btnTanks.style.borderBottom = "transparent"
    btnTanks.style.color = "white"

}

btnTout.onclick = function() {
    chargerPersonnage("", "")
    reset_color()
    btnTout.style.borderBottom = "solid white"
    btnTout.style.color = "rgb(170, 124, 37)"
}

btnAssassins.onclick = function() {
    chargerPersonnage("Assassin", "")
    reset_color()
    btnAssassins.style.borderBottom = "solid white"
    btnAssassins.style.color = "rgb(170, 124, 37)"
}
btnCombattants.onclick = function() {
    chargerPersonnage("Fighter", "")
    reset_color()
    btnCombattants.style.borderBottom = "solid white"
    btnCombattants.style.color = "rgb(170, 124, 37)"
}
btnMages.onclick = function() {
    chargerPersonnage("Mage", "")
    reset_color()
    btnMages.style.borderBottom = "solid white"
    btnMages.style.color = "rgb(170, 124, 37)"
}
btnTireurs.onclick = function() {
    chargerPersonnage("Marksman", "")
    reset_color()
    btnTireurs.style.borderBottom = "solid white"
    btnTireurs.style.color = "rgb(170, 124, 37)"
}
btnSupports.onclick = function() {
    chargerPersonnage("Support", "")
    reset_color()
    btnSupports.style.borderBottom = "solid white"
    btnSupports.style.color = "rgb(170, 124, 37)"
}
btnTanks.onclick = function() {
    chargerPersonnage("Tank", "")
    reset_color()
    btnTanks.style.borderBottom = "solid white"
    btnTanks.style.color = "rgb(170, 124, 37)"
} */

// utils/cars.repository.js
pool = require("./db.js")
    // JS include = relative to CONTROLLERS 
    // VIEW include = relative to VIEWS
module.exports = {
    getChampionModel() { // defines the entity model
        return {
            "name": "XXXX",
            "tags/0": 0
        }
    },
    async getAllChampions() {
        try {
            conn = await pool.getConnection()
            sql = "SELECT icon FROM champions;"
            const rows = await conn.query(sql)
            conn.end()
            console.log("ROWS FETCHED: " + rows.length)
            return rows
        } catch (err) {
            console.log(err)
            throw err
        }
    },
    async getCategoryChampion(championCategory) {
        try {
            conn = await pool.getConnection()
            sql = "SELECT icon FROM champions WHERE `tags/0` = ?"
            const rows = await conn.query(sql, championCategory)
            conn.end()
            console.log("ROWS FETCHED: " + rows.length)
            return rows
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    /* ,
    async delOneCar(carId) {
        try {
            conn = await pool.getConnection()
            sql = "DELETE FROM cars WHERE car_id = ?"
            const okPacket = await conn.query(sql, carId) // affectedRows, insertId
            conn.end()
            console.log(okPacket)
            return okPacket.affectedRows
        } catch (err) {
            throw err
        }
    },
    async addOneCar(brandId) {
        try {
            conn = await pool.getConnection()
            sql = "INSERT INTO cars (car_id, car_brand) VALUES (NULL, ?) "
            const okPacket = await conn.query(sql, brandId) // affectedRows, insertId
            conn.end()
            console.log(okPacket)
            return okPacket.insertId
        } catch (err) {
            throw err
        }
    },
    async editOneCar(carId, carBrand, carName, carBaseprice, carIsfancy, carRealprice) {
        try {
            conn = await pool.getConnection()
            sql = "UPDATE cars SET car_brand=?, car_name=?, car_baseprice=?, car_isFancy=?, car_realPrice=? WHERE car_id=? " // TODO: named parameters? :something
            const okPacket = await conn.query(sql, [carBrand, carName, carBaseprice, carIsfancy, carRealprice, carId])
            conn.end()
            console.log(okPacket)
            return okPacket.affectedRows
        } catch (err) {
            throw err
        }
    }*/
}
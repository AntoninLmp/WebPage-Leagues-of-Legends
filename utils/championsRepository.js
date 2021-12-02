// utils/cars.repository.js
var pool = require("./db.js")
    // JS include = relative to CONTROLLERS 
    // VIEW include = relative to VIEWS
module.exports = {
    getChampionModel() { // defines the entity model
        return {
            "id_champion": "X",
            "key_champion": 0,
            "name": "X",
            "title": "X",
            "tags_0": "X",
            "tags_1": "X",
            "hp": 0,
            "mp": 0,
            "mpperlevel": 0,
            "movespeed ": 0,
            "armor": 0,
            "armorperlevel": 0,
            "spellblock": 0,
            "spellblockperlevel ": 0,
            "attackrange ": 0,
            "hpregen ": 0,
            "hpregenperlevel ": 0,
            "mpregen": 0,
            "mpregenperlevel": 0,
            "crit ": 0,
            "critperlevel": 0,
            "attackdamage ": 0,
            "attackdamageperlevel": 0,
            "attackspeedperlevel ": 0,
            "attackspeed ": 0,
            "icon": "X",
            "sprite_url": "X",
            "sprite_x": 0,
            "sprite_y": 0,
            "description": "X"
        }
    },
    async getAllChampions() {
        try {
            conn = await pool.getConnection()
            sql = "SELECT * FROM champions;"
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
            sql = "SELECT * FROM champions WHERE tags_0 = ?"
            const rows = await conn.query(sql, championCategory)
            conn.end()
            console.log("ROWS FETCHED: " + rows.length)
            return rows
        } catch (err) {
            console.log(err)
            throw err
        }
    },
    async getOneChampion(championId) {
        try {
            conn = await pool.getConnection()
            sql = "SELECT * FROM champions WHERE id_champion = ?"
            const rows = await conn.query(sql, championId)
            conn.end()
            console.log("ROWS FETCHED: " + rows.length)
            if (rows.length == 1) {
                return rows[0];
            } else {
                return false;
            }
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
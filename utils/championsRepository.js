// utils/cars.repository.js
var pool = require("./db.js")
    // JS include = relative to CONTROLLERS 
    // VIEW include = relative to VIEWS
module.exports = {
    getChampionModel() { // defines the entity model
        return {
            "id": "X",
            "key": 0,
            "name": "X",
            "title": "X",
            "tags/0": "X",
            "tags/1": "X",
            "stats/hp": 0,
            "stats/mp": 0,
            "stats/mpperlevel": 0,
            "stats/movespeed ": 0,
            "stats/armor": 0,
            "stats/armorperlevel": 0,
            "stats/spellblock": 0,
            "stats/spellblockperlevel ": 0,
            "stats/attackrange ": 0,
            "stats/hpregen ": 0,
            "stats/hpregenperlevel ": 0,
            "stats/mpregen": 0,
            "stats/mpregenperlevel": 0,
            "stats/crit ": 0,
            "stats/critperlevel": 0,
            "stats/attackdamage ": 0,
            "stats/attackdamageperlevel": 0,
            "stats/attackspeedperlevel ": 0,
            "stats/attackspeed ": 0,
            "icon": "X",
            "sprite/url": "X",
            "sprite/x": 0,
            "sprite/y": 0,
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
            sql = "SELECT * FROM champions WHERE `tags/0` = ?"
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
            sql = "SELECT * FROM champions WHERE `id` = ?"
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
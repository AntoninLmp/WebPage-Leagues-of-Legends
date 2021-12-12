const { connect } = require("../controllers/champions.routes.js")
var pool = require("./db.js")

module.exports = {
    getFigurineModel() {
        return {
            "pop_id": "X",
            "pop_picture": 0,
            "pop_price": 0,
            "pop_quantity": 0
        }
    },
    async getAllFigurine() {
        try {
            conn = await pool.getConnection()
            sql = "SELECT * FROM PopUp;"
            const rows = await conn.query(sql)
            conn.end()
            return rows
        } catch (error) {
            console.log(error)
            throw error
        }
    },
    async updateQuantityLessThanOne(popId) {
        try {
            conn = await pool.getConnection()
            sql = "SELECT pop_quantity FROM popup WHERE pop_id = ?;"
            var rows = await conn.query(sql, popId)
            sql = "UPDATE popup SET pop_quantity = ? WHERE popup.pop_id = ?;"
            rows = await conn.query(sql, [rows[0].pop_quantity - 1, popId])
            sql = "SELECT * FROM PopUp;"
            const table = await conn.query(sql)
            conn.end()
            return table
        } catch (error) {
            throw error
        }
    }
}


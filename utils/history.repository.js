var pool = require("./db.js")

module.exports = {
    getHistoryModel() {
        return {
            "history_id": "X",
            "history_name": 0,
            "history_price": 0,
            "history_date": "X",
            "history_state": "X"
        }
    },
    async getAllhistory() {
        try {
            conn = await pool.getConnection()
            sql = "SELECT * FROM history;"
            const rows = await conn.query(sql)
            conn.end()
            console.log("ROWS FETCHED: " + rows.length)
            return rows
        } catch (error) {
            throw error
        }
    },
    async getOneHistory(historyId) {
        try {
            conn = await pool.getConnection()
            sql = "SELECT * FROM history WHERE history_id = ?"
            const rows = await conn.query(sql, historyId)
            conn.end()
            console.log("ROWS FETCHED: " + rows.length)
            if (rows.length == 1) {
                return rows[0]
            } else {
                return false
            }
        } catch (error) {
            throw error
        }
    },
    async addOneHistory(historyName, historyPrice, historyState) {
        try {
            conn = await pool.getConnection();
            sql = "INSERT INTO history (history_id, history_name,history_price,history_date,history_state) VALUES (null, ?, ?, now(), ?);";
            console.log(sql)
            const okPacket = await conn.query(sql, [historyName, historyPrice, historyState]);
            conn.end();
            console.log(okPacket.insertId); // affectedRows, insertId
            return okPacket.insertId;
        } catch (err) {
            throw err;
        }
    },
    async deleteOneHistory(historyId) {
        try {
            conn = await pool.getConnection();
            sql = "DELETE FROM history WHERE history_id = ?";
            const okPacket = await conn.query(sql, historyId);
            conn.end();
            console.log(okPacket); // affectedRows, insertId
            return okPacket.affectedRows;
        } catch (error) {
            throw error;
        }
    },
    async editOneHistory(historyId, historyName, historyPrice, historyDate, historyState) {
        try {
            conn = await pool.getConnection();
            sql = "UPDATE history SET history_name = ?, history_price = ?, history_date = ?, history_state = ? WHERE history_id = ?;";
            const okPacket = await conn.query(sql, [historyName, historyPrice, historyDate, historyState, historyId]);
            conn.end();
            console.log(okPacket); // affectedRows, insertId
            return okPacket.affectedRows;
        } catch (error) {
            throw error;
        }
    }
}
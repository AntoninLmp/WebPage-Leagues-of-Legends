// utils/cars.repository.js
pool = require("../utils/db.js");
// JS include = relative to CONTROLLERS 
// VIEW include = relative to VIEWS
module.exports = {
    getBlankPlayer() { // defines the entity model
        return {
            "team_id": 0,
            "team_name": "XXXX",
            "team_victory": 0,
            "team_defeat": 0,
            "team_continent": 0,
            "player_top": 0,
            "player_mid": 0,
            "player_adc": 0,
            "player_support": 0,
            "player_jungle": 0
        };
    },

    async getOnePLayer(playerId) {
        try {
            conn = await pool.getConnection();
            sql = "SELECT FROM player WHERE player_id = ?";
            const okPacket = await conn.query(sql, playerId);
            conn.end();
            console.log(okPacket); //affectedRows, insertId
            return okPacket.affectedRows;
        } catch (error) {
            throw error
        }
    },
    async getAllPlayers() {
        try {
            conn = await pool.getConnection();
            sql = "SELECT * FROM player";
            const rows = await conn.query(sql);
            conn.end();
            console.log("ROWS FETCHED: " + rows.length);
            return rows;
        } catch (err) {
            throw err;
        }
    },
};
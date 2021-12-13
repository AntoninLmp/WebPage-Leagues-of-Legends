// utils/cars.repository.js
pool = require("../utils/db.js");
// JS include = relative to CONTROLLERS 
// VIEW include = relative to VIEWS
module.exports = {
    getBlankTeam() { // defines the entity model
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

    async getAllTeam() {
        try {
            conn = await pool.getConnection();
            sql = "SELECT * FROM team";
            const rows = await conn.query(sql);
            conn.end();
            console.log("ROWS FETCHED: " + rows.length);
            return rows;
        } catch (err) {
            throw err;
        }
    },
    async getOneTeam(teamId) {
        try {
            conn = await pool.getConnection();
            sql = "SELECT * FROM team WHERE team_id = ?";
            const rows = await conn.query(sql, teamId);
            conn.end();
            if (rows.length == 1) {
                return rows[0];
            } else {
                return false;
            }
        } catch (err) {
            throw err;
        }
    },
    async editOneTeam(teamId, teamName, teamVictory, teamDefeat, teamContinent, playerTop, PlayerMid, PlayerAdc, PlayerSupport) {
        try {
            conn = await pool.getConnection();
            sql = "UPDATE team SET team_name=?, team_victory=?, team_defeat=?, team_continent=? WHERE team_id=?";
            const okPacket = await conn.query(sql, [teamName, teamVictory, teamDefeat, teamContinent, teamId]);
            conn.end();
            console.log(okPacket); // affectedRows, insertId
            return okPacket.affectedRows;
        } catch (err) {
            throw err;
        }
    },

    async delOneTeam(teamId) {
        try {
            conn = await pool.getConnection();
            sql = "DELETE FROM team WHERE team_id = ?";
            const okPacket = await conn.query(sql, teamId);
            conn.end();
            console.log(okPacket); // affectedRows, insertId
            return okPacket.affectedRows;
        } catch (err) {
            throw err;
        }
    }

};
// utils/cars.repository.js
pool = require("../utils/db.js");
// JS include = relative to CONTROLLERS 
// VIEW include = relative to VIEWS
module.exports = {
    getBlankPlayer() { // defines the entity model
        return {
            "player_id": 0,
            "player_firstName": "XXXX",
            "player_lastName": 0,
            "player_pseudo": 0,
            "player_country": 0,
            "player_team": 0,
            "player_favCaract": 0,
            "player_role": 0
        };
    },

    async getOnePLayer(playerId) {
        try {
            conn = await pool.getConnection();
            sql = "SELECT * FROM player WHERE player_id =?";
            const rows = await conn.query(sql, playerId);
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
    async addOnePlayer(playerFirstName, playerLastName, playerPseudo, playerCountry, playerTeam, playerFavCaract, player_role) {
        try {
            conn = await pool.getConnection();
            sql = "INSERT INTO player(player_firstName, player_lastName, player_pseudo, player_country, player_team, player_favCaract, player_role) VALUES (?,?,?,?,?,?,?)"
            const rows = await conn.query(sql, [playerFirstName, playerLastName, playerPseudo, playerCountry, playerTeam, playerFavCaract, player_role]);
            conn.end();
            console.log("ROWS FETCHED: " + rows.length);
            return rows;
        } catch (err) {
            throw err;
        }
    },
    async editOnePlayer(playerFirstName, playerLastName, playerPseudo, playerCountry, playerTeam, playerFavCaract, playerRole, playerId) {
        try {
            conn = await pool.getConnection();
            sql = "UPDATE player SET player_firstName=?, player_lastName=?, player_pseudo=?, player_country=?, player_team=?, player_favCaract=?, player_role=? WHERE player_id=?; ";
            const okPacket = await conn.query(sql, [playerFirstName, playerLastName, playerPseudo, playerCountry, playerTeam, playerFavCaract, playerRole, playerId]);
            conn.end();
            console.log(okPacket); // affectedRows, insertId
            return okPacket.affectedRows;
        } catch (err) {
            throw err;
        }
    },
    async delOnePlayer(playerId) {
        try {
            conn = await pool.getConnection();
            sql = "DELETE FROM player WHERE player_id = ?";
            const okPacket = await conn.query(sql, playerId);
            conn.end();
            console.log(okPacket); // affectedRows, insertId
            return okPacket.affectedRows;
        } catch (err) {
            throw err;
        }
    },
};
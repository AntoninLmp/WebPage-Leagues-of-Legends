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
  // async getOnePLayer(playerId) {
  //   try {
  //     conn = await pool.getConnection();
  //     sql = "SELECT FROM player WHERE player_id = ?";
  //     const okPacket = await conn.query(sql, playerId);
  //     conn.end();
  //     console.log(okPacket); // affectedRows, insertId
  //     return okPacket.affectedRows;
  //   } catch (error) {
  //     throw error
  //   }
  // },
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
  },
  async delOneCar(carId) {
    try {
      conn = await pool.getConnection();
      sql = "DELETE FROM cars WHERE car_id = ?";
      const okPacket = await conn.query(sql, carId);
      conn.end();
      console.log(okPacket); // affectedRows, insertId
      return okPacket.affectedRows;
    } catch (err) {
      throw err;
    }
  },
  async addOneCar(brandId) {
    try {
      conn = await pool.getConnection();
      sql = "INSERT INTO cars (car_id, car_brand) VALUES (null, ?)";
      const okPacket = await conn.query(sql, brandId);
      conn.end();
      console.log(okPacket); // affectedRows, insertId
      return okPacket.insertId;
    } catch (err) {
      throw err;
    }
  },
  async editOneCar(carId, car_brand, car_name, car_baseprice, car_isFancy, car_realPrice) {
    try {
      conn = await pool.getConnection();
      sql = "UPDATE cars SET car_brand=?, car_name=?, car_baseprice=?, car_isFancy=?, car_realPrice=? WHERE car_id=?";
      const okPacket = await conn.query(sql,
        [car_brand, car_name, car_baseprice, car_isFancy, car_realPrice, carId]);
      conn.end();
      console.log(okPacket); // affectedRows, insertId
      return okPacket.affectedRows;
    } catch (err) {
      throw err;
    }
  }
  
};
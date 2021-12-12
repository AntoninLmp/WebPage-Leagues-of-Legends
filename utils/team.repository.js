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
            "player_suuport": 0
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
    }
    /*,
        async getOneCar(carId) {
            try {
                conn = await pool.getConnection();
                // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
                // escape input OR prepared statements OR use orm
                sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = ?";
                const rows = await conn.query(sql, carId);
                conn.end();
                console.log("ROWS FETCHED: " + rows.length);
                if (rows.length == 1) {
                    return rows[0];
                } else {
                    return false;
                }
            } catch (err) {
                throw err;
            }
        },
        async delOneCar(carId) {
            try {
                conn = await pool.getConnection();
                sql = "DELETE FROM cars WHERE car_id = ?";
                const okPacket = await conn.query(sql, carId); // affectedRows, insertId
                conn.end();
                console.log(okPacket);
                return okPacket.affectedRows;
            } catch (err) {
                throw err;
            }
        },
        async addOneCar(brandId) {
            try {
                conn = await pool.getConnection();
                sql = "INSERT INTO cars (car_id, car_brand) VALUES (NULL, ?) ";
                const okPacket = await conn.query(sql, brandId); // affectedRows, insertId
                conn.end();
                console.log(okPacket);
                return okPacket.insertId;
            } catch (err) {
                throw err;
            }
        },
        async editOneCar(carId, carBrand, carName, carBaseprice, carIsfancy, carRealprice) {
            try {
                conn = await pool.getConnection();
                sql = "UPDATE cars SET car_brand=?, car_name=?, car_baseprice=?, car_isFancy=?, car_realPrice=? WHERE car_id=? "; // TODO: named parameters? :something
                const okPacket = await conn.query(sql, [carBrand, carName, carBaseprice, carIsfancy, carRealprice, carId]);
                conn.end();
                console.log(okPacket);
                return okPacket.affectedRows;
            } catch (err) {
                throw err;
            }
        }*/
};
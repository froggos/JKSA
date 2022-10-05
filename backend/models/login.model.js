const conn = require("../config/database");
const sha1 = require("sha1-hash-and-verify");

const getUserVerify = (user, password) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM users WHERE user = "${user}"`;
            conn.query(sql, (error, result) => {
                if(result === undefined || Object.entries(result).length === 0) {
                    reject(false);
                } else {
                    const validatePassword = sha1.verifyHash(password, result[0]["password"]);
                    
                    if(validatePassword) {
                        resolve(
                            {
                                ok      : true,
                                id      : result[0]["id"],
                                role    : result[0]["role_id"],
                                username: result[0]["username"]
                            }
                        )
                    }
                }
            });
        } catch(error) {
            reject(error);
        }
    });
}
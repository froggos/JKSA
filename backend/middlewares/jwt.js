const jwt = require("jsonwebtoken");

const generateToken = (id, user, role) => {
    const payload = { id, user, role };

    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.JWTKEY, {
            expiresIn: "1h",
        }, (err, token) => {
            if(err){
                reject(err);
            }
            resolve(token);
        });
    });
}

module.exports = generateToken;
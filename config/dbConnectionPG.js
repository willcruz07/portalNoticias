const {Pool} = require('pg');

const config = {
    user: "postgres",
    database: "BASE_VIVORJ",
    password: "#abc123#",
    port: "5432"
};

module.exports = function () {
    function query (text, params, callback) {
        return pool.query(text, params, (erro, result) => {});
    };
};


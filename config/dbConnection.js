const MySQL = require('mysql');

const Connection = function () {    
    console.log("conectando ao banco");
    return conn = MySQL.createConnection({
        host: 'localhost',
        user: 'willcruz',
        password : '93861777',
        database : 'portal_noticias'        
    });    
}

module.exports = function () {
    return Connection;
} 

const express = require('./config/server');

express.listen(3000, function(req, req){
    console.log("Servidor rodando...");
})
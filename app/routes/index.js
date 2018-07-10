module.exports = function (express) {

    express.get('/postgres', function (req, res, next) {
        const dbConnection = express.config.dbConnectionPG();
        const detalhe = express.models.postgreDAO(dbConnection);

        detalhe.getTableDetalhe(function (err, result) {
            if (err) {
                return next(err)
            }
            res.render('index', {noticia: result});
        });
    });
};
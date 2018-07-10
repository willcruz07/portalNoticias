module.exports.index = function (application, req, res) {
    const dbConnection = application.config.dbConnection();   
    const noticiasDAO = new application.app.models.noticiasDAO(dbConnection);

    noticiasDAO.getNoticiaPrincipal(function (erro, result) {
        res.render('index', {noticia : result});    
    });
};
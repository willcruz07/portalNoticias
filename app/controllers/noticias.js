module.exports.exibeNoticia = function(application, req, res) {
    var dbConnection = application.config.dbConnection();
    var noticiaDAO = new application.app.models.noticiasDAO(dbConnection);
    
    noticiaDAO.getNoticia(req.query, function (erro, result) {                         
        res.render('noticia', {noticia: result});
    })
};

module.exports.exibeNoticias = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiaDAO = new application.app.models.noticiasDAO(connection);

    noticiaDAO.getNoticias(function (erro, result) {
        res.render('noticias', {noticias: result});
    });
};

module.exports.exibeFormulario = function (application, req, res) {
    res.render('formulario_inclusao_noticia', {erro: {}, info: {}});
};

module.exports.salvarNoticia = function (application, req, res, erro) {

    if (!erro.isEmpty()) {                              
        res.render('formulario_inclusao_noticia', {erro: erro.array(), info: req.body});
        return; 
    }
    
    var dbConnection = application.config.dbConnection();
    var noticiaDAO = new application.app.models.noticiasDAO(dbConnection);        

    noticiaDAO.setNoticia(req.body, function(err, result) {
        res.redirect('/noticias');
    })
}
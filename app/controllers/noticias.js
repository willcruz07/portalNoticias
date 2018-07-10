module.exports.exibeNoticia = function(application, req, res) {
    res.render('formulario_inclusao_noticia', {erro: {}, info: {}})
};

module.exports.salvarNoticia = function (application, req, res, erro) {

    if (!erro.isEmpty()) {                              
        res.render('formulario_inclusao_noticia', {erro: erro.array(), info: req.body});
        return; 
    }
    
    var dbConnection = application.config.dbConnection();
    var noticiaDAO = new application.models.noticiasDAO(dbConnection);        

    noticiaDAO.setNoticia(req.body, function(err, result) {
        res.redirect('/');
    })
}
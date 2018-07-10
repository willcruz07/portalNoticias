const {check, validationResult} = require('express-validator/check');

module.exports = function(application) {
    application.get('/noticia', function (req, res) {             
        application.app.controllers.noticias.exibeNoticia(application, req, res);
    });

    application.get('/noticias', function (req, res) {
        application.app.controllers.noticias.exibeNoticias(application, req, res);
    });

    application.get('/form_noticia', function (req, res) {
        application.app.controllers.noticias.exibeFormulario(application, req, res);
    });

    application.post('/noticia_salvar', 
            [check('titulo', 'O título é obrigatório').not().isEmpty()],
            [check('resumo', 'O resumo é obrigatório').not().isEmpty()],
            [check('data', 'A data é obrigatória').not().isEmpty()],
            [check('conteudo', 'O conteudo é obrigatório').not().isEmpty()],
            [check('conteudo', 'O conteudo deve conter o minio de 5 e o máximo de 100 caracteres').isLength({min:5, max:100})],          
                function (req, res) {         

        application.app.controllers.noticias.salvarNoticia(application, req, res, validationResult(req));                
    });
};
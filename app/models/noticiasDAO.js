function noticiasDAO (connection) {
    this._connection = connection;
};

noticiasDAO.prototype.getNoticiaPrincipal = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5 ', callback);
};

noticiasDAO.prototype.getNoticia = function (params, callback) {
    this._connection.query('select * from noticias where id_noticia = ' + params.id_noticia, callback);
}

noticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias order by data desc', callback);
};

noticiasDAO.prototype.setNoticia = function (noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback)
}

module.exports = function () {
    return noticiasDAO;
};
function noticiasDAO (connection) {
    this._connection = connection;
};

noticiasDAO.prototype.getNoticia = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5 ', callback);
};

noticiasDAO.prototype.setNoticia = function (noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback)
}

module.exports = function () {
    return noticiasDAO;
};
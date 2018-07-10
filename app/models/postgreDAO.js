function postgreSQL (connection) {
    this._connection = connection;
}

postgreSQL.prototype.getTableDetalhe = function (callback) {
    this._connection('SELECT * FROM wshop.detalhe', callback);
}

module.exports = function () {
    return postgreSQL;
}
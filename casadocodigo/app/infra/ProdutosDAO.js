
function ProductosDAO(connection){
    this._connection = connection;
}

ProductosDAO.prototype.lista = function(callback){
    this._connection.query('select * from livros',callback);
}

module.exports = function(){
    return ProductosDAO;
}
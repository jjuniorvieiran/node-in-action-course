module.exports = function(){ //trick to enganar load-express

    return function(connection) {

        this.lista = function(callback){
            connection.query('select * from livros', callback);
        }

        return this;
    }

}
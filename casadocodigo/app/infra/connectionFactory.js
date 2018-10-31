var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'password',
                database:'casadocodigo_nodejs'
          });

}

//wrapper > to be load just when called
module.exports = function(){
    return createDBConnection;
}
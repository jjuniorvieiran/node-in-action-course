

var mysql = require('mysql');
var connectMYSQL = function(){

    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'password',
                database:'casadocodigo_nodejs22'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'password',
                database:'casadocodigo_nodejs_test'
        });
    }
};

//wrapper > to be load just when called
module.exports = function(){
    return connectMYSQL;
}
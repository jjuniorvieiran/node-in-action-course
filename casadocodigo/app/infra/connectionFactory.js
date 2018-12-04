

var mysql = require('mysql');
var connectMYSQL = function(){

    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'password',
                database:'casadocodigo_nodejs'
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

    if(process.env.NODE_ENV == 'production') { //heruko plataforma as a service
        return mysql.createConnection({
                host:'us-cdbr-iron-east-01.cleardb.net',
                user:'b7bf82771848c1',
                password:'30f37179',
                database:'heroku_88cccb87f065619'
        });
    }


    
};

//wrapper > to be load just when called
module.exports = function(){
    return connectMYSQL;
}
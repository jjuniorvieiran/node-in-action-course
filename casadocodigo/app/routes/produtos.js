module.exports = function(app){

    app.get('/produtos',function(req,res){
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection); //paremeter to the object productBanco

        produtosBanco.lista(function(erros,resultados){ // paremeter to function lista
            res.render('produtos/lista',{lista:resultados});
            });


        connection.end();

    });

    app.get('/produtos/form',function(req,res){
	    res.render('produtos/form');
	});
}
var express = require('express'); //code regarding express
var app = express();	//code regarding express

app.set('view engine','ejs'); // code regarding ejs

app.get('/produtos',function(req,res){
    res.render("produtos/lista");
});

app.listen(3000,function(){
    console.log("servidor rodando");
});
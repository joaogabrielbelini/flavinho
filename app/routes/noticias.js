module.exports = function(app){
	app.get('/noticias', function(req,res){

		var mysql=require('mysql');
		var conection= mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password:'',
			database:'portal_noticias'
		});
		conection.query('select * from noticias',function(error, result){
			res.render('noticias/noticias',{noticias: result});
		});
	});
}
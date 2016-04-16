var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/createdb', function(req, res){

	pg.defaults.ssl = true;

	var client = new pg.client(process.env.DATABASE_URL);

	pg.connect(process.env.DATABASE_URL, function(err, client, done){

		client.query('CREATE TABLE product IF NOT EXISTS product(\
	                                            name VARCHAR(40) UNIQUE NOT NULL,\
	                                            sku VARCHAR(40) PRIMARY KEY,\
	                                            price FLOAT(2) NOT NULL,\
	                                            category VARCHAR(40) REFERENCES categories(name));',

	      	function(err, results){

	      		done();

	      		if(err) console.log(error);
	      		else console.log("success");

	        });
	});
	
	res.render("/");
});

module.exports = router;

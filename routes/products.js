var pg = require('pg');


exports.createDB = function(req, res){
	var client = new pg.client(process.env.DATABASE_URL);

	client.connect();

	var query = client.query('CREATE TABLE product IF NOT EXISTS product(\
	                                            name VARCHAR(40) UNIQUE NOT NULL,\
	                                            sku VARCHAR(40) PRIMARY KEY,\
	                                            price FLOAT(2) NOT NULL,\
	                                            category VARCHAR(40) REFERENCES categories(name));');

	query.on('end', function(){ client.end(); });
}
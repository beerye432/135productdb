var pg = require("pg");

pg.connect(process.env.DATABASE_URL, function(err, client, done){

	client.query('CREATE TABLE product IF NOT EXISTS product(\
                                            name VARCHAR(40) UNIQUE NOT NULL,\
                                            sku VARCHAR(40) PRIMARY KEY,\
                                            price FLOAT(2) NOT NULL,\
                                            category VARCHAR(40) REFERENCES categories(name));');

	done();

	if(err){
		console.log(err);
	}
	else{
		console.log("success");
	}
});

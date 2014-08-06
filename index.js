var parser = require('apis-parser');

module.exports = function(app,prefix){
	var flights = require('flights');

	app.get(prefix + '/:type/kef',function(req,res){
		parser(res)(function(cb){
			flights.kef({
	        	type: req.params.type,
	            language: req.query.language
	        }, cb);
		});
	});
}
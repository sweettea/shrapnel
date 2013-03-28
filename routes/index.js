

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

var incoming=require('./incoming');

exports.incoming_handler = function(req,res){
	incoming.parser(req,res);
};

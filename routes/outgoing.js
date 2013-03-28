var querystring = require('querystring');
var needle=require('needle');

function mailObject(req){
	console.log(req);
	var thisMail={
	'from'		:'Shrapnel <shrapnel-reply@mit.edu>',
	'to'		: req.body.sender,
	'subject'	:'Shrapnel',
	'text'		: req.body.body-plaintext
	};
	return thisMail;
};

exports.mailer = function(req){
	needle.post("https://api.mailgun.net/v2/sweettea.mailgun.org/messages", 
	mailObject(req),
	{ 
	username: 'api',
	password: '',
	multipart: true
	}
	);
};



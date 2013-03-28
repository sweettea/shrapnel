var querystring = require('querystring');
var needle=require('needle');

function mailObject(req){
	var thisMail={
	'from'		:'Shrapnel <shrapnel-reply@mit.edu>',
	'to'		: req.body.sender,
	'subject'	:'Shrapnel',
	'text'		: req.body.body-plaintext
	};
	return thisMail;
};

exports.mailer = function(req){
	needle.post("https://api.mailgun.net/v2/sweettea.mailgun.org/messages', { 
	username: 'api',
	password: 'key-0-oiq0wurwzyzrjqu11w4-tuuxkvysf6',
	}
	,mailObject(req));
};



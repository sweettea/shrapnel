var querystring = require('querystring');
var needle=require('needle');

function mailObject(reqbody){
	console.log("Trying to build an email to send!");
	console.log(reqbody);
	var thisMail={
	'from'		:'Shrapnel <shrapnel-reply@mit.edu>',
	'to'		: reqbody.sender,
	'subject'	:'Shrapnel',
	'text'		: reqbody.body-plaintext
	};
	return thisMail;
};

exports.mailer = function(reqbody){
	needle.post("https://api.mailgun.net/v2/sweettea.mailgun.org/messages", 
	mailObject(req),
	{ 
	username: 'api',
	password: '',
	multipart: true
	}
	);
};



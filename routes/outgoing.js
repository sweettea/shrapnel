var querystring = require('querystring');
var needle=require('needle');

function mailObject(reqbody){
	console.log("Trying to build an email to send!");
	console.log(reqbody);
	var thisMail={
	'from'		:'Shrapnel <shrapnel-reply@mit.edu>',
	'to'		: reqbody.sender,
	'subject'	:'Shrapnel',
	'text'		: reqbody['body-plain']
	};
	return thisMail;
};

exports.mailer = function(reqbody){
	needle.post("http://postbin.ryanbigg.com/7543d0d7", 
	mailObject(reqbody),
	{ 
	username: 'api',
	password: '',
	multipart: true
	}
	,function(err,resp,body){
		console.log("Postbin:");
		console.log(resp);
		console.log(body);
		});
	needle.post("https://api.mailgun.net/v2/sweettea.mailgun.org/messages", 
	mailObject(reqbody),
	{ 
	username: 'api',
	password: 'key-0-oiq0wurwzyzrjqu11w4-tuuxkvysf6',
	multipart: true
	}
	,function(err,resp,body){
		console.log("mailgun:");
		console.log(resp);
		console.log(body);
		});
};



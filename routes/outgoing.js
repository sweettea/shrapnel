var querystring = require('querystring');
var needle=require('needle');

function mailObject(reqbody){
	console.log("Trying to build an email to send!");
	console.log(reqbody);
	var thisMail={
	'from'		: 'Shrapnel:'+reqbody['from'],
	'to'		: reqbody.sender,
	'subject'	:'Shrapnel:'+reqbody['subject'],
	'text'		: reqbody['body-plain'],
	'html'		: reqbody['body-html']
	};
	return thisMail;
};

exports.mailer = function(reqbody){
	needle.post("https://api.mailgun.net/v2/sweettea.mailgun.org/messages", 
	mailObject(reqbody),
	{ 
	username: 'api',
	password: 'key-0-oiq0wurwzyzrjqu11w4-tuuxkvysf6',
	multipart: true
	}
	,function(err,resp,body){
		console.log("mailgun says");
		console.log(body);
		});
};



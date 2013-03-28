var cronJob=require('cron').cronJob;
var outgoing=require('outgoing');
function scheduleCron(req,when){
	var thisJob=new cronJob(when,outgoing.mailer(req));
	
	
	};
function parseWhen(req){
	return new Date();
	};

exports.parser=function(req,res){
	when=parseWhen(req);
	scheduled=scheduleCron(req,when);
	res.writeHead(200);
	res.end();
}

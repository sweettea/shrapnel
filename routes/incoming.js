var cronJob=require('cron').CronJob;
var outgoing=require('./outgoing');
function scheduleCron(reqbody,when){
	var thisJob=new cronJob(when,outgoing.mailer(reqbody));
	
	
	};
function parseWhen(req){
	return new Date();
	};

exports.parser=function(req,res){
	when=parseWhen(req);
	try{
		scheduled=scheduleCron(req.body,when);
		res.writeHead(200);
		}
	catch(e){
		res.writeHead(406);
		}
	res.end();
}

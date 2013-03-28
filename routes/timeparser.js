var moment=require("moment");


exports.router=function(req){
	var receivedat=req.body.recipient;
	//eat the domain and the fu prefix
	receivedat=receivedat.substring(2,receivedat.indexOf("@"));
	console.log("Received at "+receivedat);
	switch (true){
		case /every/.test(receivedat):
			//make it into a cron pattern
		case /next/.test(receivedat):
			//onetimerun, needs to be intelligent
		case /[0-9]{4}/.test(receivedat):
			//militarytime
		case /[0-9]{2}[ap]m/.test(receivedat):
			//elka;dfs
		default:
			return new Date();
		}
	}

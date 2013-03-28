var moment=require("moment");
function isValidDayName(receivedat){
	//day of the week or unit of time.
	return 
		/^(mon|tues|wednes|thurs|fri|satur|sun)(day)?/.test(receivedat)||
		/^(mon|tue|wed|thu|fri|sat|sun)/.test(receivedat)
	//	/^[mtwrfsu]$/.test(receivedat)|| //--one letter day codes not used.
	}
function isValidUnit(receivedat){
	//day of the week or unit of time.
	return 
		/^(month|week|year|day|hour|minute|second)$/.test(receivedat);
	}
function isValidDateTime(receivedat){
	return moment(receivedat).isValid();
	}
function isValidTime(receivedat){
	return false;
	}
function isValidDate(receivedat){
	return false;
	//return moment(receivedat,['MMMDD','MMMDD
	}
function everyrouter(receivedat){
	return new Date();
	}
function nextrouter(receivedat){
	return new Date();
	}
function addtimerouter(receivedat){
	receivedat=receivedat.substring(1);
	//currently only accepts +numunit, not e.g. +3h5m.
	var thisTime=moment();
	var unitPiece=receivedat.match(/[a-zA-Z]/);
	thisTime.add(receivedat.substring(unitPiece[0]),receivedat.substring(0,unitPiece[0]));//must be in order units,numberof
	return thisTime.date();
	}
exports.router=function(req){
	var receivedat=req.body.recipient;
	//eat the domain and the fu prefix
	receivedat=receivedat.substring(2,receivedat.indexOf("@"));
	console.log("Received at "+receivedat);
	switch (true){
		case /^every/.test(receivedat):
			//make it into a cron pattern
			return everyrouter(req);
			break;
		case /^\+/.test(receivedat):
			//matches now+foo
			return addtimerouter(req);
		case /tomorrow/.test(receivedat):
			receivedat="nextday";
		case /^next/.test(receivedat):
			//onetimerun
			return nextrouter(req);
		case isValidDayName(receivedat):
			//day of the week or unit of time.
		case isValidUnit(receivedat):
			//day of the week or unit of time.
		case isValidDateTime(receivedat):
		case isValidTime(receivedat):
		case isValidDate(receivedat):
		default:
			return new Date();
		}
	}

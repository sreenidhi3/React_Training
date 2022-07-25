function test(callback){
//	callback();
	return callback
}

function callbackFunc(){
	console.log("Calling the callback function")
	return 5;
}

test(callbackFunc)
console.log("-----------")
//test(callbackFunc())
console.log("-----------")
//test(() => callbackFunc())
	
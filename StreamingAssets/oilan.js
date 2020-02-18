function testVoid() {
    var num=parseInt(value);
    unityInstance.SendMessage('WebGLMessageHandler', 'RecieveMessageInt',num);
    window.alert('Void');
   console.log(num);
   console.log(typeof (num));
}

function GetUserID(){
	var val = parseInt(value);
	console.log("UserID: "+val);
	return val;
}

function GetProgress(){
	console.log(progres);
	return progres;
}

function SetProgress(JSONinput){
	console.log("Saving progress...");
	console.log("LOG - Game send this: "+JSONinput)
}
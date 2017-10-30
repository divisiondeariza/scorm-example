// Saved as file "SCORMGeneric.js"
// Generic Simple SCO Script -
// Concocted by CO 2002-10-14
console.log("Called");
var nFindAPITries = 0;
var objAPI = null;
var bFinishDone = false;
function FindAPI(win) {
	while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
		nFindAPITries ++;
		if (nFindAPITries > 500) {
			alert("Error in finding LMS API -- too deeply nested.");
			return null
		}
		win = win.parent
	}
	return win.API
}
function APIOK() {
	return ((typeof(objAPI)!= "undefined") && (objAPI != null))
}
function SCOInitialize() {
	if ((window.parent) && (window.parent != window)){
		objAPI = FindAPI(window.parent)
	}
	if ((objAPI == null) && (window.opener != null)){
		objAPI = FindAPI(window.opener)
	}
	if (!APIOK()) {
		alert("Learning Management System interface not found.");
		return "false"
	} else {
		return objAPI.LMSInitialize("")
	}
}
function SCOFinish() {
	if ((APIOK()) && (bFinishDone == false)) {
		bFinishDone = (objAPI.LMSFinish("") == "true")
	}
	return (bFinishDone.toString())
}
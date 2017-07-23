// make an XHR request and return a promise
function GetJSON(url){
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.addEventListener("load", function(data){
			resolve(JSON.parse(data.target.response));
		});
		xhr.open("GET", url);
		xhr.send();
	});
}

export default GetJSON;

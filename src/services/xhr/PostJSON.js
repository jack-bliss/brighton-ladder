// make an XHR request and return a promise
function PostJSON(url, data){
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.addEventListener("load", function(data){
			resolve(JSON.parse(data.target.response));
		});
		xhr.open("POST", url);
        xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(data));
	});
}

export default PostJSON;

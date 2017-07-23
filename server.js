const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

const database = __dirname + '/database/';

function tablePath(table){
	return database + table + '.json';
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './dist')));

const port = process.env.PORT || 8080;

app.get('/database/:table/:id?', (req, res) => {
	if(typeof req.params.id === 'undefined'){
		return res.sendFile(tablePath(req.params.table));
	} else {
		let read = new Promise((resolve, reject) => {
			fs.readFile(tablePath(req.params.table), (err, contents) => {
				return resolve(JSON.parse(contents));
			});
		}).then(table => {
			var entry = table.reduce((current, val) => {
				return (val.id === parseInt(req.params.id)) ? val : current;
			}, null);
			res.send(JSON.stringify(entry));
		});
	}
});

app.post('/update/:table', (req, res) => {
	let read = new Promise((resolve, reject) => {
		fs.readFile(tablePath(req.params.table), (err, contents) => {
			return resolve(JSON.parse(contents));
		})
	}).then(table => {
		if(req.body.push){
			max_id = table.reduce((current, val) => {
				return (val.id > current) ? val.id : current;
			}, 0);
			req.body.data.id = max_id+1;
			table.push(req.body.data);
		} else if(req.body.delete){
			table = table.filter((entry) => {
				return entry.id !== req.params.id;
			});
		}
		return new Promise((resolve, reject) => {
			fs.writeFile(tablePath(req.params.table), JSON.stringify(table), () => {
				return resolve(table);
			})
		})
	}).then((data) => {
		return res.send(JSON.stringify(data));
	});
});

app.get('*', (req, res) => {
	return res.sendFile(__dirname + '/dist/app.html');
});

app.listen(port, () => console.log('Listening on port', port));

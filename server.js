const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = '3000';

const server = http.createServer((req, res) => {
	let contentType = 'text/html';
	let fileName = '/client/index.html';

	switch (req.url) {
		case '/':
			contentType = 'text/html';
			fileName = '/client/index.html';
			break;

		case '/three.js':
			contentType = 'text/javascript';
			fileName = '/three.js';
			break;

		case '/main.js':
			contentType = 'text/javascript';
			fileName = '/client/main.js';
			break;

		default:
			console.log("Can't find requested url: " + req.url);
	}

	fs.readFile(__dirname + fileName, 'binary', (err, file) => {
		if (err) {
			console.log(err);
		} else {
			res.statusCode = 200;
			res.setHeader('Content-type', contentType);
			res.end(file);
		}
	});
});

server.listen(port, hostname, null, () => {
	console.log(`Server running: ${hostname}:${port}`);
});

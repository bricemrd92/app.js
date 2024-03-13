const http = require('http');
const server = http.createServer((req, res) => {
	res.end('Hello, Docker!');
});
Server.listen(3000);

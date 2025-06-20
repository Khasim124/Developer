const http = require('http');

const server = http.createServer((req, res) => {
    res.write(req.url);
    res.end();
    console.log("server running...")
});


server.listen(8000);
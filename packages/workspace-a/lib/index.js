require("dotenv").config();
const http = require("http");

const serve = (text) => {
    const port = process.env.PORT || 8080;

    console.log("starting http server on 0.0.0.0:" + port)
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(text);
    }).listen(port, '0.0.0.0');
}

module.exports = {
    serve,
}

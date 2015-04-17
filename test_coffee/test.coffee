fs = require('fs')
http = require('http')
server = http.Server (req, res) ->
	res.writeHead(200)
server.listen(8080)


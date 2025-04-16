import  http from 'http'

const server =  http.createServer((req, res) => {
return res.end ('Hello Wold')

})

server.listen(3334)
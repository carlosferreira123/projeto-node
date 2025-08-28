import  http from 'http'



const users = []

const server =  http.createServer((req, res) => {
const {method, url} = req

 if (method === 'GET' && url === '/users') {
  return res
  .setHeader('Content-type', 'application/json')
  .end(JSON.stringify(users))
 }

 if (method === 'POST' && url === '/users'){
     users.push({
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
     })

    return res.end('Criação de usuários')
 }

 return  res.end('Hello world')
})

server.listen(3333)
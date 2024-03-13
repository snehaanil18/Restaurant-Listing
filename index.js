// 1. Import json-server
const jsonserver = require('json-server')

// 2. Create a server application using jsonserver
const restServer = jsonserver.create()

// 3. Setup path for db.json
const router = jsonserver.router('db.json')

// 4. Return middleware
const middleware = jsonserver.defaults()

// 5. Setup a port number
const port = 3001 

// 6. Use in restServer
restServer.use(middleware)
restServer.use(router)

// 7. To run the server
restServer.listen(port,() =>{
    console.log('Restaurant server listening on port' + port);
})
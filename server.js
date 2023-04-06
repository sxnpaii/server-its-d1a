
const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 3001; // port 3001

server.use(middlewares);
// router
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}))
server.use(router);

server.listen(port);

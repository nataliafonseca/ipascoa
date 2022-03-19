require("dotenv/config");
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

const port = process.env.PORT || 4000;

server.db = router.db;

server.use(cors({ origin: "*" }));
server.use(auth);
server.use(middleware);
server.use(router);

server.listen(port);
console.log(`🏃 server running on http://localhost:${port}`);

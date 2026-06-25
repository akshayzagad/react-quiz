import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("data/question.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 9000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON server is running on port ${port}`);
});

import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('./functions/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export const handler = async () => {
  const response = await new Promise((resolve) => {
    server.listen(5000, () => {
      resolve({
        statusCode: 200,
        body: JSON.stringify({ message: 'JSON Server is running' }),
      });
    });
  });

  return response;
};

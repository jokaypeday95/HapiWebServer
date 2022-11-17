// console.log('Halo, kita akan belajar membuat server menggunakan Hapi');

// Create HTTP Server with Hapi
// npm install @hapi/hapi

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

// testing request dan response
/**
 * curl -X GET http://localhost:5000
 * curl -X GET http://localhost:5000/about
 * curl -X GET http://localhost:5000/test
 * curl -X POST http://localhost:5000
 * curl -X GET http://localhost:5000/hello/dicoding?lang=id
 * curl -X GET http://localhost:5000/hello/dicoding
 */
import Fastify from 'fastify';
import fastifyIO from 'fastify-socket.io';

const fastify = Fastify({ logger: true });

await fastify.register(fastifyIO, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

fastify.io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
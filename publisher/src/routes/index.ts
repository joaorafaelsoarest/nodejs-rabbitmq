import express from 'express';
import RabbitmqServer from '../config/rabbitmq-server';

const router = express.Router();


router.post('/publish', async function(req, res) {
  
  const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672');
  await server.start();
  await server.publishInQueue('castanhaMQ', JSON.stringify(req.body));
  await server.publishInExchange('amq.direct', 'castanhaExchange', JSON.stringify(req.body));
  res.send(req.body);
});

export default router;

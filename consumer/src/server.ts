import express from 'express';
import logger from 'morgan'
import RabbitmqServer from './config/rabbitmq-server';

const port = 3000
const app = express()

app.use(logger('dev'))
app.use(express.json())


const consumer = async () => {
    const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672');
    await server.start();
    await server.consume('castanhaMQ', (message) => console.log(message.content.toString()));
}


consumer()

app.listen(port, () => {
    console.log(`-------------------Consumer ON-------------------`)
  })

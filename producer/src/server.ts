import express from 'express';
import logger from 'morgan'
import indexRouter from './routes';

const port = 3000
const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use('/', indexRouter);


app.listen(port, () => {
    console.log(`-------------------Producer ON-------------------`)
  })

import express from 'express';
// import { createCourse }  from './routes';
import { routerProducts } from './routes';

const app = express();
app.use(express.json());


app.use(
  '/products',
  routerProducts
);

app.get('/', (_req, res) => {
  res.send('Hello Worldddd!');
});


app.listen('3001', () => {
  console.log('Listening...')
});
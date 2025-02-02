import express, { json } from 'express';
import serverlessHttp from 'serverless-http';

const app = express();
app.use(json());

app.get('/', (_, res) => res.json({
  msg: 'Hello World',
}));

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export const handler = serverlessHttp(app);

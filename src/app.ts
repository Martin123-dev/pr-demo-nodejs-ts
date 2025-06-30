import express from 'express';

const app = express();

app.get('/hello', (_req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

export default app;
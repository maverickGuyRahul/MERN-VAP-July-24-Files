import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendStatus(100);
});

app.post('/submit', (req, res) => {
  res.sendStatus(301);
});

app.put('/submit', (req, res) => {
  res.sendStatus(201);
});

app.patch('/submit', (req, res) => {
  res.sendStatus(404);
});

app.delete('/submit', (req, res) => {
  res.sendStatus(501);
});

app.listen(port, () => {
  console.log(`Your server is listening to requests on port ${port}`);
});

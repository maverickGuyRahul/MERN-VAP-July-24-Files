import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About us page</h1>  ');
});

app.listen(port, () => {
  console.log(`Your server is up and running on port ${port}`);
});

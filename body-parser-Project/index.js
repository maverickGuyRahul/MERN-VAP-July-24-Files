import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
  //   console.log(__dirname);
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Form details collected Successfully!');
  //   console.log(__dirname);
});

app.listen(port, () => {
  console.log(
    `The server is running and listening to requests on port number : ${port}`
  );
});

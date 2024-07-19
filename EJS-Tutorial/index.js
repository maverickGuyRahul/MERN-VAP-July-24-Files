import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const userPassword = '12345';

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  let userName = req.body.fullName;
  res.render('success', { fName: userName });
});

app.listen(port, () => {
  console.log(
    `The server is running and listening to requests on port number : ${port}`
  );
});

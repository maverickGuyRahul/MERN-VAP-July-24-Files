import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  let firstName = req.body.fName;
  let lastName = req.body.lName;

  let totalNumberOfLetters = firstName.length + lastName.length;

  res.render('index', { totalLetters: totalNumberOfLetters });
  // console.log(firstName.length);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

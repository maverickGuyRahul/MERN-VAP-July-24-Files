import fs from 'fs';

fs.writeFile('message.txt', 'Hello ViMEET', (err) => {
  if (err) throw err;
  console.log('The file has been saved');
});

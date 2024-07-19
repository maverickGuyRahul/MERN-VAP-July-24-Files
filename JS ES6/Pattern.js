// console.log('*');
// console.log('*');
// console.log('*');
// console.log('*');
// console.log('*', (end = ' '));

// let stars = '* * * * *';

// console.log(stars);
// console.log(stars);

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write('* ');
// }

for (let line = 1; line <= 5; line++) {
  for (let i = 1; i <= line; i++) {
    process.stdout.write('* ');
  }
  console.log('');
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

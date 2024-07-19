function greet(name, callback) {
  console.log('Welcome ' + name);
  callback();
}

function bye() {
  console.log('Thank you, visit again!');
}

console.log(greet('Raahul', bye));

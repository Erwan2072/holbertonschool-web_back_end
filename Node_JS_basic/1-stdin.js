
console.log("Welcome to Holberton School, what is your name?")
// active stdin
process.stdin.resume();
process.stdin.setEncoding('utf-8');


// lisen enter from user
process.stdin.on('data', function(data) {
  const name = data.trim();
  console.log(`Your name is: ${name}` );


  console.log('This important software is now closing');
  process.exit();

});

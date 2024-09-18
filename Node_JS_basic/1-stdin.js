// 1-stdin.js
console.log("Welcome to Holberton School, what is your name?");

process.stdin.on('data', (data) => {
  const inputName = data.toString().trim(); // Pour enlever les espaces ou sauts de ligne
  console.log(`Your name is: ${inputName}`);
  process.exit();
});

process.on('exit', () => {
  console.log("This important software is now closing");
});

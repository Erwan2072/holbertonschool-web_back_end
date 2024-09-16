const { input, select } = require('@inquirer/prompts');

async function main() {
  /* When I commented out the first two lines, the following code works properly */
  const text = await input({ message: `your name?\n` });
  console.log('inputText', text);
  /**
   * My code is omitted
   */

  /* When I used 'input', 'process.stdin.on' no longer works */
  process.stdin.on('data', async inputs => {
    let text = inputs.toString().trim();
    if (!text) return;
    switch (text) {
      case 'cls':
        console.clear();
        break;
      case 'bye':
        process.exit(0);
      default:
        console.log('stdinText:', text);
        /* I will do some other logic here, but I just streamlined it out */
        break;
    }
  });
}

main();

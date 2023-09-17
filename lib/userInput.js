const inquirer = require('inquirer');


async function collectUserInput() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: function (input) {
          return input.length <= 3;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):',
      },
    ]);

    return userInput;
  } catch (error) {
    console.error('Error collecting user input:', error);
    process.exit(1);
  }
}

module.exports = { collectUserInput };

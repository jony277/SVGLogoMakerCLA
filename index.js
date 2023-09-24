const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shape');

function promptUser() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want?',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      message: 'What color do you want for the shape?',
      name: 'color',
    },
    {
      type: 'input',
      message: 'What text do you want to show (3 characters max)?',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What color do you want for the text?',
      name: 'textColor',
    }
  ])
  .then((answer) => {
    let svg = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    let shape;
    if (answer.shape === 'Triangle') {
      shape = new Triangle();
    } else if (answer.shape === 'Square') {
      shape = new Square();
    } else {
      shape = new Circle();
    }
    shape.setColor(answer.color);
    svg += shape.render();

    svg += `<text x="150" y="100" fill="${answer.textColor}">${answer.text}</text>`;
    svg += '</svg>';

    fs.writeFile('logo.svg', svg, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  });
}

promptUser();

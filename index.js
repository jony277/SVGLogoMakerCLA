const inquirer = require('inquirer');
const fs = require('fs');

const {Triangle, Square} = require('./lib/shapes')


function promptUser(){
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want?',
      choices:['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'list',
      message: 'What is your preferred color',
      name: 'color',
      choices: ['Red', 'Yellow', 'Blue'],
    },
    {
      type: 'input',
      message: 'What Text do you want to show (3 characters max)?',
      name: 'text',
    },
  ])
  .then((answer) => {
    if (answer.text.length >3){
      console.log("3 Characters max");
      promptUser();
    }else{
      console.log(answer);
      writeFile('logo.svg',answer);
    }
  });

}

function writeFile(fileName, answer){
  let svg ="";
  svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svg += '<g>';
  svg += `${answer.shape}`;

  let shapeChoice;
  switch(answer.shape){
    case "Triangle": 
      shapeChoice = new Triangle();
      svg += `<polygon points="150, 18 244, 182 56, 182" fill="${answer.color}"/>`;
      break;
    case "Square":
      shapeChoice = new Square();
      svg += `<rect x="73" y="40" width="160" height="160" fill="${answer.color}"/>`;
      break;
    default:
      console.log("Choose only Square or Triangle");
      promptUser();
  }
  svg += `<text x="150" y="130" text-anchor="middle" font-size="40">${answer.text}</text>`;
svg += "</g>";
svg += "</svg>";

fs.writeFile(fileName, svg, (err) => {
  err ? console.log(err) : console.log("Generated logo.svg");
});
}

promptUser();
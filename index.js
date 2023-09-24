const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shape");

const promptUser = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo text:",
      validate: (input) => input.length <= 3 || "Text must be up to 3 characters."
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Triangle", "Circle", "Square"]
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color keyword or hexadecimal for the shape:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color keyword or hexadecimal for the text:",
    }
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "Triangle":
        shape = new Triangle();
        break;
      case "Circle":
        shape = new Circle();
        break;
      case "Square":
        shape = new Square();
        break;
    }
    shape.setColor(answers.shapeColor);
    const svgContent = shape.render(answers.text, answers.textColor);
    fs.writeFileSync("logo.svg", svgContent);
    console.log("Generated logo.svg");
  });
};

promptUser();

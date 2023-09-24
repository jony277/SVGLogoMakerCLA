const { Triangle, Circle, Square } = require("./shape");

test("Triangle should render correctly", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render("T", "white")).toEqual('<svg><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="100" fill="white">T</text></svg>');
});

test("Circle should render correctly", () => {
  const shape = new Circle();
  shape.setColor("green");
  expect(shape.render("C", "white")).toEqual('<svg><circle cx="100" cy="100" r="50" fill="green" /><text x="100" y="100" fill="white">C</text></svg>');
});

test("Square should render correctly", () => {
  const shape = new Square();
  shape.setColor("red");
  expect(shape.render("S", "white")).toEqual('<svg><rect x="50" y="50" width="100" height="100" fill="red" /><text x="100" y="100" fill="white">S</text></svg>');
});

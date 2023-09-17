const { Triangle, Circle, Square } = require('./shape');

test('Triangle class should render correct SVG code', () => {
  const triangle = new Triangle();
  triangle.setColor('red');
  const svgCode = triangle.render();
  expect(svgCode).toEqual('<polygon points="150,18 244,182 56,182" fill="red" />');
});

test('Circle class should render correct SVG code', () => {
  const circle = new Circle();
  circle.setColor('blue');
  const svgCode = circle.render();
  expect(svgCode).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Square class should render correct SVG code', () => {
  const square = new Square();
  square.setColor('green');
  const svgCode = square.render();
  expect(svgCode).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
});

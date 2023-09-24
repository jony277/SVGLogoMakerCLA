const { Triangle, Square, Circle } = require('./shape');

describe("Shape Tests", () => {
  
  describe("Triangle", () => {
    test('Triangle should render with a yellow background', () => {
      const shape = new Triangle();
      shape.setColor("yellow");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />');
    });
  });

  describe("Square", () => {
    test('Square should render with a blue background', () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="blue" />');
    });
  });

  describe("Circle", () => {
    test('Circle should render with a red background', () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  });

});

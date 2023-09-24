import { Triangle, Square } from './lib/shape.mjs';

describe("Triangle test", () => {
  test('test for a triangle with a yellow background', () => {
    const shape = new Triangle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill= "yellow" />');
  });
});

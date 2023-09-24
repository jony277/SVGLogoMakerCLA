class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render(text, textColor) {
    return "";
  }
}

class Triangle extends Shape {
  render(text, textColor) {
    return `<svg><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="100" fill="${textColor}">${text}</text></svg>`;
  }
}

class Square extends Shape {
  render(text, textColor) {
    return `<svg><rect x="50" y="50" width="100" height="100" fill="${this.color}" /><text x="100" y="100" fill="${textColor}">${text}</text></svg>`;
  }
}

class Circle extends Shape {
  render(text, textColor) {
    return `<svg><circle cx="100" cy="100" r="50" fill="${this.color}" /><text x="100" y="100" fill="${textColor}">${text}</text></svg>`;
  }
}

module.exports = { Triangle, Circle, Square };

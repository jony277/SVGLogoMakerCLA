const fs = require('fs');

function generateSVG({ text, textColor, shape, shapeColor }) {
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="48">${text}</text>
    </svg>
  `;

  return svgContent;
}

function saveSVGToFile(svgContent, filename) {
  try {
    fs.writeFileSync(filename, svgContent);
    console.log(`Generated ${filename}`);
  } catch (err) {
    console.error('Error writing SVG file:', err);
  }
}

module.exports = { generateSVG, saveSVGToFile };

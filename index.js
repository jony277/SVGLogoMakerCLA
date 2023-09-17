const { collectUserInput } = require('./lib/userInput');
const { generateSVG } = require('./lib/generateSVG');


async function startApp() {
  try {
   
    const userInput = await collectUserInput();

    
    await generateSVG(userInput);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}


startApp();

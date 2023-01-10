const profileDataArgs = process.argv.slice(2, process.argv.length);
const [title, purpose, technology, developer ] = profileDataArgs;

const generatePage = (title, purpose, technology, developer) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Readme Demo</title>
    </head>
  
    <body>
      <h1>${title}</h1>
      <h1>${purpose}</h1>
      <h1>${technology}</h1>
      <h1>${developer}</h1>

    </body>
    </html>
    `;
};

console.log(title, purpose, technology, developer);
console.log(generatePage(title, purpose, technology, developer));
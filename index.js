const inquirer = require("inquirer");
const fs = require("fs");
const filename = 'user.html';

// Prompt question list
questions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your location?',
    name: 'location',
  },
  {
    type: 'input',
    message: 'Tell me about yourself',
    name: 'bio',
  },
  {
    type: 'input',
    message: 'What is your LinkedIn URL?',
    name: 'linkedIn',
  },
  {
    type: 'input',
    message: 'What is your github URL?',
    name: 'gitHub',
  },
  {
    type: 'list',
    message: 'What is your favorite weather: ',
    name: 'weather',
    choices: ['sun','rain','clouds','lightning']
  },
  {
    type: 'list',
    message: 'Choose your theme: ',
    name: 'style',
    choices: ['light','dark','blues']
  },
  // Add weather list
];

const weatherImages = {
  sun: 'https://www.extremetech.com/wp-content/uploads/2020/01/NASA-Sun.jpg',
  rain: 'https://www.sciline.org/wp-content/uploads/2021/02/cropped-Torrential-Rain-Flooding-and-Climate-Change-2000x834.jpg',
  clouds: "https://cdn.vox-cdn.com/thumbor/FNRQapctOr2iQ9BA0EAlpNzwiQA=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15788040/20150428-cloud-computing.0.1489222360.jpg",
  lightning: "https://images.newscientist.com/wp-content/uploads/2021/08/06164343/lightningroom_-the-agency_alamy_f13d8m.jpg",
}

var name = 'Andrew';

// Ask for user input and create page
inquirer.prompt(questions)
.then((data) => {

  bioHTML =
  `<!DOCTYPE html>
  <html lang='en-US'>
  <head>
    <title>User Bio Page</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link type='text/css' rel='stylesheet' src='./${data.style}.css' />
  </head>
  <body>
    <header class="jumbotron">
      <h1>${data.username}</h1>
    </header>
    <main class="m-2">
      <div class='card p-2'>
        <h3>${data.location}</h3>
        <p>${data.bio}</p>
        <p><em>${data.username} enjoys ${data.weather}</em></p>
      <div>
      <div>
        <img src='${weatherImages[data.weather]}'>
      </div>
      <div class='card p-2'>
        <a href='${data.linkedIn}'>LinkedIn</a>
        <a href='${data.gitHub}'>github</a>
      </div>
      
    </main>
  </body>
  </html>
  `

  console.log(data)
  // data.username
  fs.writeFile(filename, bioHTML, (err) =>
    err ? console.error(err) : console.log('Success!'))

  bioCSS = 
  `
  body {
    font-family: ,
  }
  
  `

})

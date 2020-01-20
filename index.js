const fs = require('fs');
const pdf = require('html-pdf');
const inquirer = require("inquirer");
// const html = fs.readFileSync("./assets/template.html", 'utf8');
const options = { format: 'A3' };

const generatedHtml = require("./assets/template")
const axios = require("axios")

function askQuestions() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please provide Github Username.",
      name: "username"
    }, {
      type: "input",
      message: "What is favorite color?",
      name: "color"
    }
  ]).then(function (userInput) {


    githubInfo(userInput)

  
  })
}

function githubInfo(userInput) {
  let queryUrl = "https://api.github.com/users/" + userInput.username
  axios.get(queryUrl).then(function (response) {

    let url = "https://api.github.com/users/" + userInput.username + "/starred"
    axios.get(url).then(function (response2) {
            
            // console.log(response)
           console.log(response2)


            
// * The generated resume includes a bio image from the user's GitHub profile.

// * The generated resume includes the user's location and a link to their GitHub profile.

// * The generated resume includes the number of: public repositories, followers, GitHub stars and following count.

// * The background color of the generated PDF matches the color that the user provides.

            let dataInfo = {
              name:response.data.name,
              color:userInput.color,
              image:response.data.avatar_url,
              location:response.data.location,
              publicRepos:response.data.public_repos,
              followers:response.data.followers,
              following:response.data.following,
              stars:response2.data[0].stargazers_count
            }

            console.log(dataInfo)

            let html = generatedHtml(dataInfo)
            makePDF(html)
    })

  })
}

askQuestions()

function makePDF(html) {
  pdf.create(html, options).toFile('./resumeInfo.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });
}


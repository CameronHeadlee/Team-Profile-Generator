const inquirer = require("inquirer");
const require = require("inquirer");

const questions = [
    {
        message: "What is the name of the project manager?",
        type: "input",
        name: "manager"
    },
    {
        message: "What is your manager's ID number?",
        type: "input",
        name: "managerId"
    },
    {
        message: "What is the Manager's Email?",
        type: "input",
        name: "managerEmail"
    },
    {
        message: "What is your manager's office number?",
        type: "input",
        name: "office"
    },
    {
        message: "What is the name of the first engineer?",
        type: "input",
        name: "firstEngineer"
    },
    {
        message: "What is your first Engineer's ID number?",
        type: "input",
        name: "firstId"
    },
    {
        message: "What is the email of the first engineer?",
        type: "input",
        name: "firstEmail"
    },
    {
        message: "What is the github username of the first engineer?",
        type: "input",
        name: "firstUsername"
    },
    {
        message: "What is the name of the second Engineer?",
        type: "input",
        name: "secondEngineer"
    },
    {
        message: "What is your second Engineer's ID number?",
        type: "input",
        name: "secondId"
    },
    {
        message: "What is the email of the second engineer?",
        type: "input",
        name: "secondEmail"
    },
    {
        message: "What is the github username of the second engineer?",
        type: "input",
        name: "secondUsername"
    },
    {
        message: "What is the name of the third Engineer?",
        type: "input",
        name: "thirdEngineer"
    },
    {
        message: "What is your first Engineer's ID number?",
        type: "input",
        name: "thirdId"
    },
    {
        message: "What is the email of the third engineer?",
        type: "input",
        name: "thirdEmail"
    },
    {
        message: "What is the github username of the third engineer?",
        type: "input",
        name: "thirdUsername"
    },
    {
        message: "What is your Intern's name?",
        type: "input",
        name: "internName"
    },
    {
        message: "What is the ID number of your Intern?",
        type: "input",
        name: "internId"
    },
    {
        message: "What is the email of the Intern?",
        type: "input",
        name: "internEmail"
    },
    {
        message: "What school does the intern attend?",
        type: "input",
        name: "school"
    },
];

const generateHTML = ({school, internEmail, internId, internName, thirdUsername, thirdEmail, thirdId, thirdEngineer, secondUsername, secondEmail, secondId, secondEngineer, firstUsername, firstEmail, firstId, firstEngineer, office, managerId, manager }) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    <main>
        <div class="d-flex flex-wrap flex-row justify-content-center">
        <section>
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${manager} 
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${managerId}</li>
                  <li class="list-group-item">Email:${managerEmail}</li>
                  <li class="list-group-item">Office:${office}</li>
                </ul>
              </div>  
        </section>
        <section>
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${firstEngineer}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${firstId}</li>
                  <li class="list-group-item">Email:${firstEmail}</li>
                  <li class="list-group-item">A third item</li>
                </ul>
              </div> 
        </section>
        <section>
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  Featured
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
              </div> 
        </section>
        <section>
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  Featured
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
              </div>  
        </section>
        <section>
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  Featured
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
              </div> 
        </section>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>   
    `
}

inquirer.prompt(questions)
.then((answers) =>{
    console.log(answers)
})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
     console.log("We could not create file. Please try again")
    }
  });
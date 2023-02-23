const inquirer = require('inquirer');
const fs = require('fs');


const generate = (teamArray) => {
let cards = [];
console.log(teamArray);


function managerCard (employee) {
  return `
  <div class="card text-center border-primary" style="width: 25rem;">
  <div class="card-body">

  <h1 class="card-title">${employee.name}</h1>
  <h4 class="card-subtitle text-muted">${employee.getRole()}</h4>

  <ul class = "list-group">

    <li class="list-group-item">ID: ${employee.id}</li>
    <li class="list-group-item">Office Number: ${employee.officeNumber}</li>

  </ul>
  <a href ='mailto: ${employee.email}' class="card-link">Email</a>

</div>
</div>`
}


function internCard (intern) {
  return `
  <div class="card text-center border-warning col-4" style="width: 25rem;">
  <div class="card-body">

  <h2 class="card-title">${intern.name}</h2>
  <h4 class="card-subtitle text-muted">${intern.getRole()}</h4>

  <ul class="list-group">

    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">School: ${intern.school}</li>

  </ul>

  <a href ='mailto: ${intern.email}' class="card-link">Email</a>

</div>
</div>`
}


function engineerCard (engineer) {
  return `
  <div class="card text-center border-warning" style="width: 25rem;">
  <div class="card-body">

  <h2 class="card-title">${engineer.name}</h2>
  <h4 class="card-subtitle text-muted">${engineer.getRole()}</h4>

  <ul class="list-group">

    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">GitHub username: ${engineer.github}</li>

  </ul>

  <a href ='mailto: ${engineer.email}' class="card-link">Email</a>


</div> 
</div>`
}


for (var i = 0; i<teamArray.length; i++) {

  if(teamArray[i].getRole() === 'Manager') {
    cards.push(managerCard(teamArray[i]))
  }

  else if(teamArray[i].getRole() === 'Engineer') {
cards.push(engineerCard(teamArray[i]))
  }

  else {
    cards.push(internCard(teamArray[i]))
};
}

return cards.join('')
};


module.exports = teamArray => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Team Profile Generator</title>
  </head>

  <header>
  <div class="container-fluid text-bg-dark text-center" style="height: 5rem">
    <h1>Team Profile Generator </h1>
  </div>
</header>

  <body>

  <div class="container mt-4">
    <div class="row gy-4">

  ${generate(teamArray)}


</div>
</div>

</body>

</html>`;
}

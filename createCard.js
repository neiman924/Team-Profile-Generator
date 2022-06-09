
//team manager’s name, employee ID, email address, and office number
const createManagerCard = (answers) =>
`
<div class="card-column">
<figure class="card code-card">
  <h2 class="card-header">${answers.position}</h2>
  <div class="card-body">
    <p>${answers.name}</p>
    <p>${answers.ID}</p>
    <p>${answers.email}</p>
  </div>
  <div class="code-block">
    <p>${answers.office_number}</p>
  </div>
</figure>
</div>
`;
const createECard = (answers) =>
`
<div class="card-column">
<figure class="card code-card">
  <h2 class="card-header">${answers.name}</h2>
  <div class="card-body">
    <p>${answers.ID}</p>
    <p>${answers.email}</p>
  </div>
  <div class="code-block">
    <p>${answers.office_number}</p>
  </div>
</figure>
</div>
`;

function generateCard(answers){
    if (answers.position = 'manager') {
        // console.log(answers.position)
        // console.log('this')
        return createManagerCard(answers);
    }
    else {
        //console.log(answers.position)
        return createECard(answers);
    }
}
module.exports = {
    generateCard
  }
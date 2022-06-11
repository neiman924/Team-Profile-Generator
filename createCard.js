
//team manager’s name, employee ID, email address, and office number
const createManagerCard = (answers,imgM) =>
`
<div class="card-column">
<figure class="card code-card">
  <h2 class="card-header">${answers.name}<br>${imgM}${answers.position}</h2>
  <div class="card-body">
    <p>ID : ${answers.ID}</p>
    <p>Email : <a href="mailto:${answers.email}" style="text-decoration: none">${answers.email}</a> </p>
  </div>
  <div class="card-body">
    <p>Office Number : ${answers.office_number}</p>
  </div>
</figure>
</div>
<br>
`;
const createECard = (answers,imgE) =>
`
<div class="card-column">
<figure class="card code-card">
  <h2 class="card-header">${answers.name}<br>${imgE}${answers.position}</h2>
  <div class="card-body">
    <p>ID : ${answers.ID}</p>
    <p>Email : <a href="mailto:${answers.email}" style="text-decoration: none">${answers.email}</a></p>
  </div>
  <div class="card-body">
    <p>GitHub Account : <a href="https://github.com/${answers.github}" style="text-decoration: none">${answers.github}</a></p>
  </div>
</figure>
</div>
`;
function generateCard(answers){
  var imgM = '<img src="./assets/m.png" alt="Smiley face" width="30" height="30" style="float:left">';
  var imgE = '<img src="./assets/e.png" alt="Smiley face" width="30" height="30" style="float:left">';
    if (answers.position === undefined) {
        answers.position = "Manager"
        // console.log('this')
        return createManagerCard(answers,imgM);
    }
    else {
        console.log(answers.position)
        return createECard(answers,imgE);
    }
}
module.exports = {
    generateCard
  }
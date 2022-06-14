const CreateCard = require("../createCard");
const answers = {position:'engineer',name:'test',ID:'test',email:'test',office_number:'test'};
const imgE = '<img src="./assets/e.png" alt="Smiley face" width="30" height="30" style="float:left">';
const Card = `
<div class="card-column">
<figure class="card code-card">
  <h2 class="card-header">${answers.name}<br>${imgE}${answers.position}</h2>
  <div class="card-body">
    <p>ID : ${answers.ID}</p>
    <p>Email : <a href="mailto:${answers.email}" style="text-decoration: none">${answers.email}</a></p>
  </div>
  <div class="card-body">
    <p>GitHub Account : <a href="https://github.com/undefined" style="text-decoration: none">undefined</a></p>
  </div>
</figure>
</div>
<br>
`;

describe("CreateCard", () => {
  describe("Initialization", () => {
    it("should return an string containing a 'html tag' property when called with the 'new' prompt object", () => {
      const obj = new CreateCard.generateCard(answers);
      expect("string" in obj).toEqual(false);
    });
  });

}); 

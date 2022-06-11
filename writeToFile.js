const fs = require('fs');
const { title } = require('process');

function write2file(fileName, card) {
    console.log(fileName);
    var f = fileName.toUpperCase();
    //fileName.toUpperCase()+'
    fs.writeFile(f+'.html', generateHtml(f,card), function (err) {
      if (err) return console.log(err);
      console.log('writed to file!');
      return;
    });
}

// fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
//   if (err) return console.log(err);
//   console.log('Hello World > helloworld.txt');
// });

const generateHtml = (f,card) =>
`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile Generator for ${f} team</title>
  <link rel="stylesheet" href="assets/css/reset.css" />
  <link rel="stylesheet" href="./assets/css/style.css" />
</head>

<body>
  <header>
    <h1 class="page-title">
      Team Profile Generator for ${f} team
    </h1>
  </header>

  <main>
    <section class="row justify-center">
    ${card}
    </section>
  </main>

  <footer>

  </footer>

</body>

</html>

`;

module.exports = {
    write2file
}
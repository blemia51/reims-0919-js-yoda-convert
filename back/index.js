const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios')
const port = 8000;

app.use(cors());

//TEST
app.get('/', (req, res) => {
  res.send('Bienvenue sur Express');
});

axios.get('https://www.markdownguide.org/api/v1/basic-syntax.json').then(resp => {
  basicSyntax = resp.data
  //console.log(basicSyntax)
  //console.log(resp.data);
});

axios.get('https://www.markdownguide.org/api/v1/cheat-sheet.json').then(resp => {
  helpSyntax = resp.data
})

app.get ('/api/basicSyntax',(req, res) => {
    res.json(basicSyntax)
    console.log(res.json(basicSyntax))
  }
 );

 app.get ('/api/helpSyntax',(req, res) => {
	res.json(helpSyntax)
	console.log(res.json(helpSyntax))
}
);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
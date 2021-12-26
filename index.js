const express = require('express')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.send([{name:"ahmed"}, {name:"hassan"}]);
})


app.get('/users/1', (req, res) => {
  res.send({name:"hassan"});
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

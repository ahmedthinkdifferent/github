const express = require('express')
const app = express()
const port = 3000
let fs = require('fs');

app.get('/users', (req, res) => {
    res.send([{name: "ahmed"}, {name: "hassan"}, {name: "mohamed"}, {name: "gamal"}]);
})


app.get('/users/1', (req, res) => {
    res.send({name: "hassan"});
})

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/readConfig', (req, res) => {
    let content = fs.readFileSync("/config1").toString()
    res.send(content)
});

app.get('/readSecret', (req, res) => {
    let content = fs.readFileSync("/run/secrets/secret1").toString()
    res.send(content)
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

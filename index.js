const express = require('express');
const fs = require('fs');

const app = express();
const port = 80;

const mainFile = fs.readFileSync('./public/index.html');

app.use(express.static('public'));
app.use(express.urlencoded());

app.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const data =
`Name : ${name}
Email : ${email}
Message : ${message}`;

    fs.writeFileSync(`${name}'s Message.txt`, data);
    res.end(mainFile);
});

app.listen(port, () => {
    console.log(`The Server is Running at port :- /${port}`);
});
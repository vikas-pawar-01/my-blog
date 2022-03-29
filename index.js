const express = require("express");
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'build'), { index: false }));

// app.get('/users', (req, res) => {
//     const data = fs.readFileSync(path.join(__dirname, 'data.json'), { encoding: 'utf8', flag: 'r' });
//     res.send(data);
// });

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    });
})

// app.get('/', (req, res, next) => {
//     res.send('Welcome to Node!');
//     return next();
// });

// app.get('/users', (req, res, next) => {
//     res.send('Users List');
//     return next();
// });

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    }
    console.log(`Connected to port :${PORT}`);
});
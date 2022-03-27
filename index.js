const express = require("express");
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

// app.get('/users', (req, res, next) => {
//     const data = fs.readFileSync(path.join(__dirname, 'data.json'), { encoding: 'utf8', flag: 'r' });
//     res.send(data);
//     return next();
// });

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
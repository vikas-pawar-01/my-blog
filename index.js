const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

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
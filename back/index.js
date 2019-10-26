const app = require('express')();

app.get('/', (req, res) => res.send('Start page'));

app.listen(7000, () => console.log("Started"));
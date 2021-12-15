const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello ISUMarco, but now a new commmit has been done!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

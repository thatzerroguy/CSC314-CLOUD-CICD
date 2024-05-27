const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(
    ' this is cloud computing DEVOPS ; CI-CD PIPELINE created with AWS, This page indicates success.',
    'Name: Nduka Ugochukwu Chinedu',
    'Matric NO.: VUG/CSC/21/5784'
));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

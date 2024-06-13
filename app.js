const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(
    ' this is cloud computing DEVOPS ; CI-CD PIPELINE created with AWS, This page indicates success. Name: NDUKA UGOCHUKWU CHINEDU Matric NO.: VUG/CSC/21/5784 This is to test for manual approval',));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

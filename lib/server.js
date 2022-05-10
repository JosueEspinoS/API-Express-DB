const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
//Require Prisma

const  { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (request, response) => {
    request.json({Message: 'Alive'});
})

app.listen(port, () => {
    console.log(`Listening to request on port ${port}`);
});;
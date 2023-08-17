const express = require('express');
require('dotenv').config()

const app = express();

const PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log(`port is listening on Port ${PORT}`)
})
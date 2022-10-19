//server boilerplate
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config();
app.use(express.json());
app.use(cors());
//end server boiler

//set static folder
app.use(express.static(path.join(__dirname, 'src')));

//port boilerplate
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started on port ${port}!`));
//end port boilerplate

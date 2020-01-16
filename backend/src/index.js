const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


// MongoDB (Não-relacional)
const userDatabase = 'omnistack';
const passwordDatabase = 'omnistack';
const nameDatabase = 'week10';
const paramsDatabase = { useNewUrlParser: true, useUnifiedTopology: true };
const databaseConnection = 'mongodb+srv://' + userDatabase + ':' + passwordDatabase + '@cluster0-pligr.mongodb.net/' + nameDatabase + '?retryWrites=true&w=majority';

mongoose.connect(databaseConnection, paramsDatabase);

app.use(express.json()); //fazer com que o express entenda json
app.use(routes);








app.listen(3333);


const express = require('express');
//Import route files
const api = require('./routes/api');
const html = require('./routes/serve-html');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded( {extended: true }));
app.use(express.static('public'));

//sets up route handling
// app.use('/api', api);
app.use('/', html);



app.listen(PORT, () => 
    console.log(`Listening on port ${PORT}`));
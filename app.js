const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')

const app = express();

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/',require('./routes/tracker'));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server started"))
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;



// Templates Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//Routes
const newsRouter = require('./src/routes/news');

app.use('/', newsRouter);
app.use('/article', newsRouter)

app.listen(process.env.PORT || port, () => console.log(`Port connect ${port}`))
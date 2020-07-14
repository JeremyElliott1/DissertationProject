//Module imports
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', (req, res, next) => {
  res.render('home.ejs', {
    title: "Homepage"
  });
} )

app.listen(3000);
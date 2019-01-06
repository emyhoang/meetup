const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

const routes = require('./routes');
app.use(express.static('public'));
app.get('/favicon.ico', (req, res, next) => {
  return res.sendStatus(204);
});

app.use('/', routes());

app.listen(3000);

module.export = app;
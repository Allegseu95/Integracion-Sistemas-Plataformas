const express = require('express');
const app = express();
const { router } = require('./routes');

app.use('/', router);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), (req, res) =>
  console.log('Servidor corriendo en puerto: ' + app.get('port'))
);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), (req, res) => {
  console.log('Servidor corriendo en puerto: ' + app.get('port'));
});

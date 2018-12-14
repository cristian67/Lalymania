const express = require('express');
const app = express();

//=========================
//  Importar rutas
//=========================
app.use(require('../routes/usuario'));
app.use(require('../routes/producto'))
app.use(require('../routes/categoria'))

module.exports = app;
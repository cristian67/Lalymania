const express = require('express');
const app = express();

const Usuario = require('../models/usuario');

//Mostrar
app.get('/usuarios', (req, res) => {
    return res.json({
        usuario: 'cristian hola'
    });

});




module.exports = app;
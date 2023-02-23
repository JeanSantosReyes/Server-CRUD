// https://www.bezkoder.com/node-express-mongodb-crud-rest-api/

const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// Crear aplicacion de express
const app = express();

// Base de datos
dbConnection();

// Coors
app.use(cors())

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/tutorials/', require('./routes/tutorial.routes'));

// Tratar rutas al subir proyecto en un servidor - React
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

// Escuchar peticion
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
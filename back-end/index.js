const express = require('express');
const req = require('express/lib/request');
const conectarDB = require ('./config/db');
const cors = require("cors");


//creacion de servidor
const app = express();

//conexion bd
conectarDB();
app.use(cors())
app.use(express.json());
app.use('/api/empleados', require('./routes/empleado'));



app.listen(4000, () => {
    console.log('el servidor sirve');
}) 
const mongoose = require('mongoose');
const EmpleadoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
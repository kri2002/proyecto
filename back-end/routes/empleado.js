// Rutas para producto
const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado-controller');

// api/productos
router.post('/', empleadoController.crearEmpleado);
router.get('/', empleadoController.obtenerEmpleados);
router.put('/:id', empleadoController.actualizarEmpleado);
router.get('/:id', empleadoController.obtenerEmpleado);
router.delete('/:id', empleadoController.eliminarEmpleado);

module.exports = router;
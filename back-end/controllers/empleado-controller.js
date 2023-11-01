const empleado = require("../models/Empleado");
const Empleado = require("../models/Empleado");

exports.crearEmpleado = async (req, res) => {
    try {
        let empleado;

        //registramos un empleado
        empleado = new Empleado(req.body);

        await empleado.save()
        res.send(empleado);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.obtenerEmpleados = async (req, res) => {

    try {

        const empleados = await empleado.find();
        res.json(empleados)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarEmpleado = async (req, res) => {

    try {
        const { nombre, puesto, edad } = req.body;
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado) {
            res.status(404).json({ msg: 'No existe el empleado en la base de datos' })
        }

        empleado.nombre = nombre;
        empleado.puesto = puesto;
        empleado.edad = edad;

        empleado = await Empleado.findOneAndUpdate({ _id: req.params.id },empleado, { new: true} )
        res.json(empleado);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerEmpleado = async (req, res) => {

    try {
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado) {
            res.status(404).json({ msg: 'No existe el Empleado' })
        }
       
        res.json(empleado);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarEmpleado = async (req, res) => {

    try {
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado) {
            res.status(404).json({ msg: 'No existe el empleado' })
        }
       
        await Empleado.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'empleado eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
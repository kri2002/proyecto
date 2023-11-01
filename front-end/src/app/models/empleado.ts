export class empleado {
    _id?: number;
    nombre: string;
    puesto: string;
    edad: number;

    constructor(nombre:string, puesto:string, edad: number){
        this.nombre=nombre;
        this.puesto=puesto;
        this.edad=edad;
    }

    
}
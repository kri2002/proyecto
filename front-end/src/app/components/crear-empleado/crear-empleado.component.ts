import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent {
  ngOnInit() {
    this.esEditar();
  }
  empleadoForm: FormGroup;
  titulo = 'Crear empleado';
  id:string | null;
  constructor(private fb: FormBuilder, 
              private router: Router,
              private toastr: ToastrService,
              private _empleadoService: EmpleadoService,
              private aRouter: ActivatedRoute){
    this.empleadoForm = this.fb.group({
      nombre: ['', Validators.required],
      puesto: ['', Validators.required],
      edad: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  agregarEmpleado(){
    
    const EMPLEADO: empleado = {
      nombre: this.empleadoForm.get('nombre')?.value,
      puesto: this.empleadoForm.get('puesto')?.value,
      edad: this.empleadoForm.get('edad')?.value,
    }

    if (this.id != null){
      //editamos empleado
      this._empleadoService.editarEmpleado(this.id, EMPLEADO).subscribe(data =>{
        this.toastr.info('El empleado fue actualizado con exito!', 'Empleado Actualizado!');
      this.router.navigate(['listar-empleado']);
      }, error => {
        console.log(error);
        this.empleadoForm.reset();
      })
      
    }
    else{
      //agregamos empleado
      console.log(EMPLEADO)
    this._empleadoService.guardarEmpleado(EMPLEADO).subscribe(data => {
      this.toastr.success('El empleado fue registrado con exito!', 'Empleado Registrado!');
      this.router.navigate(['listar-empleado']);
    }, error => {
      console.log(error);
      this.empleadoForm.reset();
    })
    }
  
    
    
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar empleado';
      this._empleadoService.obtenerEmpleado(this.id).subscribe(data => {
        this.empleadoForm.setValue({
          nombre: data.nombre,
          puesto: data.puesto,
          edad: data.edad,
        })
      })
    }
  }

  
}

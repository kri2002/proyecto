import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent {

  listEmpleados: empleado[] = [];
  
  constructor(private _empleadoService: EmpleadoService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();

}

obtenerEmpleados() {
  this._empleadoService.getEmpleados().subscribe(data => {
    console.log(data);
    this.listEmpleados = data;
  }, error => {
    console.log(error);
  })
}

eliminarEmpleado(id: any) {
  this._empleadoService.eliminarEmpleado(id).subscribe(data => {
    this.toastr.error('El empleado fue eliminado con exito' ,'empleado Eliminado');
    this.obtenerEmpleados();
  }, error => {
    console.log(error);
  })
}

}

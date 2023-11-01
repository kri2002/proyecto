import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listar-empleado', component: ListarEmpleadosComponent},
  {path: 'crear-empleado', component: CrearEmpleadoComponent},
  {path: 'editar-empleado/:id', component: CrearEmpleadoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

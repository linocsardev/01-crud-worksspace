import { RouterModule, Routes } from '@angular/router';
import { FrutasListComponent } from './ui-frutas/frutas-list/frutas-list.component';
import { ProductoListComponent } from './ui-productos/producto-list/producto-list.component';
import { UserListComponent } from './ui-user/user-list/user-list.component';
import { FormularioConsultaComponent } from './formulario-consulta/formulario-consulta.component';
import { FormProductosComponent } from './form-productos/form-productos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'frutas', component: FrutasListComponent},
  {path: 'productos', component: ProductoListComponent},
  {path: 'usuarios', component: UserListComponent},
  {path: 'consulta', component: FormularioConsultaComponent},
  {path: 'form', component: FormProductosComponent}
];


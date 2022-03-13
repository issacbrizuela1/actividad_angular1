import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FcategoriaComponent } from './forms/fcategoria/fcategoria.component';
import { FproductosComponent } from './forms/fproductos/fproductos.component';
import { FproovedoresComponent } from './forms/fproovedores/fproovedores.component';
import { FusuariosComponent } from './forms/fusuarios/fusuarios.component';
import { TcategoriaComponent } from './tablas/tcategoria/tcategoria.component';
import { TencargosComponent } from './tablas/tencargos/tencargos.component';
import { TproductosComponent } from './tablas/tproductos/tproductos.component';
import { TproovedoresComponent } from './tablas/tproovedores/tproovedores.component';
import { TusuariosComponent } from './tablas/tusuarios/tusuarios.component';



const routes: Routes = [
{path: "inicioad", component:TencargosComponent},
{path: "tabla-cate", component:TcategoriaComponent},
{path: "tabla-usuario", component:TusuariosComponent},
{path: "tabla-pv", component:TproovedoresComponent},
{path: "tabla-pro", component:TproductosComponent},

{path: "form-cate", component:FcategoriaComponent},
{path: "form-usuario", component:FusuariosComponent},
{path: "form-pv", component:FproovedoresComponent},
{path: "form-pro", component:FproductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorRoutingModule } from './administrador/administrador-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [{path:'',redirectTo:'/auth',pathMatch:'full'},
{path:'auth',component:AuthComponent},
{path:'auth', loadChildren: () => AuthModule},
{path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,AuthRoutingModule,AdministradorRoutingModule]
})
export class AppRoutingModule { }

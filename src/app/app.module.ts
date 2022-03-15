import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TproductosComponent } from './administrador/tablas/tproductos/tproductos.component';
import { FproductosComponent } from './administrador/forms/fproductos/fproductos.component';
import { TusuariosComponent } from './administrador/tablas/tusuarios/tusuarios.component';
import { FusuariosComponent } from './administrador/forms/fusuarios/fusuarios.component';
import { FcategoriaComponent } from './administrador/forms/fcategoria/fcategoria.component';
import { TcategoriaComponent } from './administrador/tablas/tcategoria/tcategoria.component';
import { TencargosComponent } from './administrador/tablas/tencargos/tencargos.component';
import { TproovedoresComponent } from './administrador/tablas/tproovedores/tproovedores.component';
import { FproovedoresComponent } from './administrador/forms/fproovedores/fproovedores.component';
import { MenuadComponent } from './componentes/menuad/menuad.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './empleado/inicio/inicio.component';
import { ProductoServiceService } from './services/productos/producto-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaService } from './services/categorias/categoria.service';
import { EncargoServiceService } from './services/encargo/encargo-service.service';
import { ProveedoresServiceService } from './services/proveedores/proveedores-service.service';
import { UsuarioServiceService } from './services/usuario/usuario-service.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    FooterComponent,
    TproductosComponent,
    FproductosComponent,
    TusuariosComponent,
    FusuariosComponent,
    FcategoriaComponent,
    TcategoriaComponent,
    TencargosComponent,
    TproovedoresComponent,
    FproovedoresComponent,
    MenuadComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductoServiceService,
    CategoriaService,
    EncargoServiceService,
    ProductoServiceService,
    ProveedoresServiceService,
    UsuarioServiceService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

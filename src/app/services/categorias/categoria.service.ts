import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Categoria } from 'src/app/modelos/categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  selectedCategoria: Categoria = new Categoria();
  constructor(private httpClient:HttpClient) { }
  getdata()
  {
    return this.httpClient.get<Categoria[]>("http://127.0.0.1:3333/mostrarCategorias");
  }
  getdatabyid(p:number)
  {
    return this.httpClient.get<Categoria[]>("http://127.0.0.1:3333/mostrarbyidCategorias/"+p);
  }
  insertcategoria(nombre:any[])
  {
    console.log(nombre)
    return this.httpClient.post<Categoria[]>("http://127.0.0.1:3333/insertCategorias",{
      nombre:"prueba"
    });
    
  }
  editcategoria(params:any)
  {
    let id=params['id_categoria'];
    let nombre=params['nombre'];
    return this.httpClient.post<Categoria[]>("http://127.0.0.1:3333/editarCategorias/"+id,{
      nombre:nombre
    });
  }
  eliminartegoria(params:any)
  {
    let id=params['id_categoria'];
    let nombre=params['nombre'];
    return this.httpClient.post<Categoria[]>("http://127.0.0.1:3333/editarCategorias/"+id,{
      nombre:nombre
    });
  }
}

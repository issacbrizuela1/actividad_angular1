import { Injectable } from '@angular/core';
import { ProductoServisio } from './producto';
import { HttpClient } from'@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class ProductoServiceService {

  constructor(private httpClient:HttpClient) 
  {
    console.log("servicio jalando");
  }
  getdata()
  {
    return this.httpClient.get<ProductoServisio[]>("http://127.0.0.1:3333/Productos");
  }
  getdatacategoria()
  {
    return this.httpClient.get<ProductoServisio[]>("http://127.0.0.1:3333/Productos");
  }
}

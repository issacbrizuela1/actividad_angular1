import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ProveedorServicio } from './proveedores';
@Injectable()
export class ProveedoresServiceService {

  constructor(private httpClient:HttpClient) 
  {
    console.log("servicio jalando");
  }
  getdata()
  {
    return this.httpClient.get<ProveedorServicio[]>("http://127.0.0.1:3333/Proveedores");
  }
}
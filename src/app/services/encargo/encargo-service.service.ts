import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { EncargoServicio } from './encargo';
@Injectable()
export class EncargoServiceService {

  constructor(private httpClient:HttpClient) 
  {
    console.log("servicio jalando");
  }
  getdata()
  {
    return this.httpClient.get<EncargoServicio[]>("http://127.0.0.1:3333/Encargos");
  }
  getdatausuario()
  {
    return this.httpClient.get<EncargoServicio[]>("http://127.0.0.1:3333/Encargos");
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UsuarioServicio } from './usuario';
@Injectable()
export class UsuarioServiceService {

  constructor(private httpClient:HttpClient) 
  {
    console.log("servicio jalando");
  }
  getdata()
  {
    return this.httpClient.get<UsuarioServicio[]>("http://127.0.0.1:3333/Users");
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../modelos/user';
import { IJWTResponse } from '../modelos/jwt-response';
import { tap } from 'rxjs';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER:String='link del servidor';
  authSubject=new BehaviorSubject(false);
  private token:string | undefined;
  constructor(private httpClient:HttpClient) {}
  register(user:IUser):Observable<IJWTResponse>
  {
    return this.httpClient.post<IJWTResponse>('${this.AUTH_SERVER}/register',user).pipe(tap((res:IJWTResponse)=>{
      if(res)
      {
        //guardar token
      }
    }));
  }
}

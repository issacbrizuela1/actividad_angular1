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
  AUTH_SERVER:string='link del servidor';
  authSubject=new BehaviorSubject(false);
  private token:any;
  constructor(private httpClient:HttpClient) {}
  register(user:IUser):Observable<IJWTResponse>
  {
    return this.httpClient.post<IJWTResponse>('${this.AUTH_SERVER}/register',user).pipe(tap((res:IJWTResponse)=>{
      if(res)
      {
        //guardar token
        this.saveToken(res.datauser.accessToken,res.datauser.expireIn);
      }
    }));
  }
  login(user:IUser):Observable<IJWTResponse>
  {
    return this.httpClient.post<IJWTResponse>('${this.AUTH_SERVER}/login',user).pipe(tap((res:IJWTResponse)=>{
      if(res)
      {
        //guardar token
        this.saveToken(res.datauser.accessToken,res.datauser.expireIn);
      }
    }));
  }
  logout():void{
    this.token="";
    localStorage.removeItem("ACCES_TOKEN");
    localStorage.removeItem("EXPIRE_IN");
  }
  private saveToken(token:string,expireIn:string):void{
    localStorage.setItem("ACCES_TOKEN",token);
    localStorage.setItem("EXPIRE_IN",expireIn);
    this.token=token;
  }
  private getToken():string{
    if(!this.token)
    {
      this.token=localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}

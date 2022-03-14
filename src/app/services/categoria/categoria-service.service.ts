import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { CategoriaServicio } from "./categoria";

@Injectable()
export class CategoriaServiceService {
    constructor(private httpClient:HttpClient){
        console.log("servicio jalando")
    }
    getdata(){
        return this.httpClient.get<CategoriaServicio[]>("http://127.0.0.1:3333/Categorias");
    }
}
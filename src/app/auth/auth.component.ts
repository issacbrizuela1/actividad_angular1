import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector:"app-auth",
    templateUrl: './auth.component.html',
    styleUrls:['./auth.component.css']
})
export class AuthComponent implements OnInit{
    constructor(private route:Router) { }
    
    navega(){
        this.route.navigate(["/login"]);
    }
    regis(){
        this.route.navigate(["/register"])
    }

    ngOnInit(): void {
        
    }
}
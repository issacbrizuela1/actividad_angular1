import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
  }
  onRegis(x:any): void {
    this.authService.login(x.value).subscribe(res=>{
      this.router.navigateByUrl('/inicio');
    });
  }

}

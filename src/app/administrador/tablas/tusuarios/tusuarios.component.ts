import { Component, OnInit } from '@angular/core';
import { UsuarioServicio } from 'src/app/services/usuario/usuario';
import { UsuarioServiceService } from 'src/app/services/usuario/usuario-service.service';

@Component({
  selector: 'app-tusuarios',
  templateUrl: './tusuarios.component.html',
  styleUrls: ['./tusuarios.component.css']
})
export class TusuariosComponent implements OnInit {
  posts: UsuarioServicio[]=[];
  constructor(private ser:UsuarioServiceService) { 
    this.ser.getdata().subscribe(data=>
      {
        this.posts=data;
      });
  }
  ngOnInit(): void {
  }

}

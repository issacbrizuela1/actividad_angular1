import { Component, OnInit } from '@angular/core';
import { ProveedorServicio } from 'src/app/services/proveedores/proveedores';
import { ProveedoresServiceService } from 'src/app/services/proveedores/proveedores-service.service';

@Component({
  selector: 'app-tproovedores',
  templateUrl: './tproovedores.component.html',
  styleUrls: ['./tproovedores.component.css']
})
export class TproovedoresComponent implements OnInit {
  posts: ProveedorServicio[]=[];
  constructor(private ser:ProveedoresServiceService) { 
    this.ser.getdata().subscribe(data=>
      {
        this.posts=data;
      });
  }
  ngOnInit(): void {
  }

}

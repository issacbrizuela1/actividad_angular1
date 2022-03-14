import { Component, OnInit } from '@angular/core';
import { ProductoServisio } from 'src/app/services/productos/producto';
import { ProductoServiceService } from 'src/app/services/productos/producto-service.service';
@Component({
  selector: 'app-tproductos',
  templateUrl: './tproductos.component.html',
  styleUrls: ['./tproductos.component.css']
})
export class TproductosComponent implements OnInit {
  posts: ProductoServisio[]=[];
  constructor(private ser:ProductoServiceService) { 
    this.ser.getdata().subscribe(data=>
      {
        this.posts=data;
      });
  }

  ngOnInit(): void {
  }

}

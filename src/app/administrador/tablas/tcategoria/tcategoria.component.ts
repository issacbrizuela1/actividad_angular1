import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/categoria';
import { CategoriaService } from 'src/app/services/categorias/categoria.service';


@Component({
  selector: 'app-tcategoria',
  templateUrl: './tcategoria.component.html',
  styleUrls: ['./tcategoria.component.css']
})
export class TcategoriaComponent implements OnInit {
  posts: Categoria[]=[];
  constructor(private ser:CategoriaService) { 
    this.ser.getdata().subscribe(data=>
      {
        this.posts=data;
      });
  }

  ngOnInit(): void {
  }

}

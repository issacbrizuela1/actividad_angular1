import { Component, OnInit } from '@angular/core';
import { CategoriaServicio } from 'src/app/services/categoria/categoria';
import { CategoriaServiceService } from 'src/app/services/categoria/categoria-service.service';

@Component({
  selector: 'app-tcategoria',
  templateUrl: './tcategoria.component.html',
  styleUrls: ['./tcategoria.component.css']
})
export class TcategoriaComponent implements OnInit {
  posts: CategoriaServicio[]=[];
  constructor(private ser:CategoriaServiceService) { 
    this.ser.getdata().subscribe(data=>
      {
        this.posts=data;
      });
  }

  ngOnInit(): void {
  }

}

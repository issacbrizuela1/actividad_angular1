import { Component, OnInit } from '@angular/core';
import { EncargoServicio } from 'src/app/services/encargo/encargo';
import { EncargoServiceService } from 'src/app/services/encargo/encargo-service.service';

@Component({
  selector: 'app-tencargos',
  templateUrl: './tencargos.component.html',
  styleUrls: ['./tencargos.component.css']
})
export class TencargosComponent implements OnInit {
  posts: EncargoServicio[]=[];
  constructor(private ser:EncargoServiceService) { 
    this.ser.getdata().subscribe(data=>
      {
        this.posts=data;
      });
  }
  ngOnInit(): void {
  }

}

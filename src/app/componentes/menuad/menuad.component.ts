import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuad',
  templateUrl: './menuad.component.html',
  styleUrls: ['./menuad.component.css']
})
export class MenuadComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
}

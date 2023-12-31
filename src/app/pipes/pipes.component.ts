import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  dateToday: string;
  name: string;

  constructor() {
    this.dateToday = '';
    this.name = ''
  }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
    this.name = "Wellnest"
  }
}

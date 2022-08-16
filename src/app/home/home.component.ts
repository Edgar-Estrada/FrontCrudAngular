import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showAlumns: any = true;
  showAddTable: any = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAlumn(){
    this.showAlumns = true;
    this.showAddTable = false;
  }

  showAdd(){
    this.showAlumns = false;
    this.showAddTable = true;
  }
}

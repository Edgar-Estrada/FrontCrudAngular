import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-show-alumns',
  templateUrl: './show-alumns.component.html',
  styleUrls: ['./show-alumns.component.css']
})
export class ShowAlumnsComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  arrAlumns: any = '';
  alumn: any = '';

  ngOnInit(): void {
    this.arrAlumns = this._dataService.getAlumn();
  }

  alumnSelected(alumn: any){
    this.alumn = alumn;
  }

}

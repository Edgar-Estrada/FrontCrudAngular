import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public arrAlumn: any = [];

  constructor() {}

  setAlumn(alumn: any) {
    this.arrAlumn.push(alumn);
  }

  getAlumn(){
    return this.arrAlumn;
  }
}

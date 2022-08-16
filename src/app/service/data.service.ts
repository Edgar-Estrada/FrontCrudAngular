import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public arrAlumn: any = [];
  private alumn = new Subject<string>();
  constructor() {}

  setAlumn(alumn: any) {
    this.arrAlumn.push(alumn);
  }

  getAlumn(): Observable<string> {
    return this.arrAlumn;
  }
}

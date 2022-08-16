import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-alumn',
  templateUrl: './add-alumn.component.html',
  styleUrls: ['./add-alumn.component.css']
})
export class AddAlumnComponent implements OnInit {

  alumn = {
    name:'',
    age: '',
    descripcion: ''
  }
  inputName: any = '';
  inputAge: any = '';
  inputDescription: any = '';

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
  }

  addAlumn(){
    if(this.inputName == '' || this.inputAge == '' || this.inputDescription ==''){
      Swal.fire({
        title: 'Error!',
        text: 'Campos vacios',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    } else {
      this.alumn.name = this.inputName;
      this.alumn.age = this.inputAge;
      this.alumn.descripcion = this.inputDescription;

      this._dataService.setAlumn(this.alumn);

      Swal.fire(
        'Bien hecho',
        'Alumno guardado!',
        'success'
      )

      this.inputAge = '';
      this.inputDescription = '';
      this.inputName = '';
    }
  }

}

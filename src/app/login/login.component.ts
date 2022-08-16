import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any = '';
  password: any = '';

  inputUser: any = '';
  inputPass: any = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  login(){
    if((this.inputUser == this.name) && (this.inputPass == this.password)){  
      this.router.navigate(['/home'])
    }
  }

  create(){
    this.name = this.inputUser;
    this.password = this.inputPass;
    this.inputUser = '';
    this.inputPass = '';
  }

}

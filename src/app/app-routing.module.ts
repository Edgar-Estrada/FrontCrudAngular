import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumnComponent } from './add-alumn/add-alumn.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowAlumnsComponent } from './show-alumns/show-alumns.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { ListTodosComponent } from './list-todos/list-todos.component';
import {LogoutComponent} from "./logout/logout.component";
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:'bienvenido/:name', component:BienvenidoComponent,canActivate:[RouteGuardService]},
  {path:'todos', component:ListTodosComponent,canActivate:[RouteGuardService]},  
  {path:'**' ,component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

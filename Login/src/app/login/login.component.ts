import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string='nachoberaza';
  public password:string='123123';
  public errorMessage:string='Invalid Credentials';
  public InvalidCredential:boolean=false;

  constructor(private router: Router,private hardcodeAuthenticationService:HardcodeAuthenticationService) {

  }

  public handleLogin():void{
    if(this.hardcodeAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['bienvenido', this.username]);
    }else{
      this.InvalidCredential=true
    }

    
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  //private isUserLoggedIn:boolean=false;

  constructor(private authentication:HardcodeAuthenticationService) {

  }

  public getAuthentication():HardcodeAuthenticationService{
    return this.authentication;
  }

  ngOnInit(): void {
    //this.isUserLoggedIn=this.authentication.isUserLoggedIn();    
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }

  authenticate(username,password):boolean{
    let indicador:boolean=true;
    console.log('Before '+ this.isUserLoggedIn());
    
    if(username==="nachoberaza" && password==="123123"){
      sessionStorage.setItem('authenticaterUser',username);
      console.log('After '+this.isUserLoggedIn());
    }else{
      indicador=false;
    }

    return indicador;
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser');
    return !(user===null);
  }

  logout():void{
    sessionStorage.removeItem('authenticaterUser');
  }
}

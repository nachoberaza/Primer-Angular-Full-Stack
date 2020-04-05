import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HelloWorldBean } from 'src/app/bienvenido/HelloWorldBean';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  private host:string='192.168.0.111'

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>(`http://${this.host}:8080/hello world-bean`);  
    
  }

  executeHelloWorldServiceWithPathVariable(name){  
    let basicHeader=this.createBasicAuthenticationHttpHeader()
    let headers=new HttpHeaders({
      Authorization:basicHeader
    });

    return this.http.get<HelloWorldBean>(`http://${this.host}:8080/hello-world/path-variable/${name}`,
    {headers});
     
  }


  createBasicAuthenticationHttpHeader(){
    let username:string='nachoberaza';
    let password:string='123123';
    let basicAuthenticationHeaderString:string='Basic '+window.btoa(username+":"+password);
    return basicAuthenticationHeaderString;
  }
  
}

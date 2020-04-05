import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    return this.http.get<HelloWorldBean>(`http://${this.host}:8080/hello-world/path-variable/${name}`)
    
  }
  
}

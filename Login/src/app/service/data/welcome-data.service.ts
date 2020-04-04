import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HelloWorldBean } from 'src/app/bienvenido/HelloWorldBean';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  private http:HttpClient;

  constructor() { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello world-bean');  
  }

  executeHelloWorldServiceWithVariable(name){  
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);  
  }
  
}

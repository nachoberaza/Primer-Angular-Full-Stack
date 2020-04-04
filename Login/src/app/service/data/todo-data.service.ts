import { Injectable } from '@angular/core';
import { Todo } from "../../list-todos/Todo";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private host:string='192.168.0.111';

  private http:HttpClient;

  constructor() { }

  retrieveAllTodos(username){  
    return this.http.get<Todo[]>(`http://${this.host}$:8080/users/${username}/todos`);  
  
  }
  
}

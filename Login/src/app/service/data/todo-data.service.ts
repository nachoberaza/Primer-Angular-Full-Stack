import { Injectable } from '@angular/core';
import { Todo } from "../../list-todos/Todo";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private host:string='192.168.0.111';

  constructor(private http:HttpClient) { }

  deleteTodo(username,id){
    return this.http.delete(`http://${this.host}:8080/<Resto de la url>`);

  }

  retrieveAllTodos(username){  
    return this.http.get<Todo[]>(`http://${this.host}:8080/users/${username}/todos`);  
  }

  retrieveTodo(username,id){
    return this.http.get<Todo>(`http://${this.host}:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username,id,todo){
    return this.http.put(`http://${this.host}:8080/users/${username}/todos/${id}`,todo);
  }  
  
  createTodo(username,todo){
    return this.http.post(`http://${this.host}:8080/users/${username}/todos`,todo);
  }


  
}

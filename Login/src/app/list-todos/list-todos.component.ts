import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  public todos:Todo[];
  
     // new Todo(1,'Aprendiendo a diseñar',false,new Date()),
    // new Todo(2,'Convirtiendome en un experto en Angular',false,new Date()),
    // new Todo(3,'Pasando la cuarentena',false,new Date())
  


  constructor(private service:TodoDataService) { }

  ngOnInit(): void {
    this.service.retrieveAllTodos('nachoberaza').subscribe(
      response=>{
        console.log(response),
        this.todos=response
      }
    );
  }

}

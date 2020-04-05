import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  public todos:Todo[];
  public message:string;

  constructor(private service:TodoDataService, private router:Router) { }

  deleteTodo(id){
    this.service.deleteTodo('nachoberaza',id).subscribe(
      response=>{
        this.message=`Delete of Todo ${id} Succesful` 
        this.refreshTodos();
      }
    );
    
  }

  updateTodo(id){
    this.router.navigate(['todos',id]);
  }

  refreshTodos(){
    this.service.retrieveAllTodos('nachoberaza').subscribe(
      response=>{
        console.log(response),
        this.todos=response
      }
    );
  }
  ngOnInit(): void {
    this.refreshTodos();
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/Todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public id:number
  todo:Todo;

  constructor( private TodoService:TodoDataService,
  private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.TodoService.retrieveTodo('nachoberaza',this.id).subscribe(
      data=>this.todo=data
    )
  }

}

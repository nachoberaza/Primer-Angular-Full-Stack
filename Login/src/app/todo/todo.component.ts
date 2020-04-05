import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/Todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public id:number
  todo:Todo;

  constructor( private TodoService:TodoDataService,
  private route:ActivatedRoute,
  private router:Router) { }

  saveTodo() {
    if(this.id == -1) { //=== ==
      this.TodoService.createTodo('nachoberaza', this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    } else {
      this.TodoService.updateTodo('nachoberza', this.id, this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    }
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.todo=new Todo(this.id,'',false,new Date());
    this.TodoService.retrieveTodo('nachoberaza',this.id).subscribe(
      data=>this.todo=data
    )
  }

}

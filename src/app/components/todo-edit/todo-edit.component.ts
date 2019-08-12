import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  
  public todo : Todo = {} as Todo;

  constructor(private todoService : TodoService, 
              private router : Router) {

  }

  ngOnInit() {
  }

  public onAdd(){
    this.todoService.add(this.todo);
    this.router.navigate(['todos']);
  }

}

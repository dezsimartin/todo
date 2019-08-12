import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos : Todo[];

  selectedTodoIds : Array<number> = [];

  constructor(private todoService : TodoService) { }

  ngOnInit() {
      this.todos = this.todoService.getAll();
  }

  public onCheckboxClick(event, id){
      if(event.target.checked){
        this.selectedTodoIds.push(id);
      }
      if(!event.target.checked){
        this.selectedTodoIds.splice(this.selectedTodoIds.indexOf(id), 1)
      }
      console.log(this.selectedTodoIds);
  }

  public deleteTodos(){
      for(let i = 0; i < this.selectedTodoIds.length; i++){
        for(let j = 0; j < this.todos.length; j++){
          if(this.selectedTodoIds[i] === this.todos[j].id){
            this.todos.splice(j, 1);
          }
        }
      }
      this.selectedTodoIds = [];
  }

  public handleDeleteClick(id : number){
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getAll();
  }
  
}

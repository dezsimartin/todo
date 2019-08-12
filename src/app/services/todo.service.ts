import { Injectable } from '@angular/core';
import { Todo } from '../components/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos : Todo[] = [
    new Todo(1, 'name', 'az'),
    new Todo(2, 'legyenszép', 'ez'),
    new Todo(3, 'ásd fel a kertet', 'ásóval ásd fel')
  ]

  constructor() { }

  public getAll(){
    return this.todos;
  }

  public deleteTodo(id : number){
    this.todos = this.todos.filter(t => t.id != id);   
    console.log(this.todos); 
  }

  public deleteTodos(arr : Array<number>){

  }

  public add(todo : Todo){
    this.todos.push(todo);

  }
}

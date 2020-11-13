import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../moder/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 todos:Todo[]
  constructor() { 
    this.todos=[
      {
        id:'111',
        title:'Learn C++',
        isComplete:true,
        date:new Date()
      },
      {
        id:'222',
        title:'Learn Js',
        isComplete:true,
        date:new Date()
      },
      {
        id:'111',
        title:'Learn Angular',
        isComplete:false,
        date:new Date()
      }
    ]
  }


  getTodos(){
    return of(this.todos)
  }

  addTodo(todo:Todo){
     this.todos.push(todo)
  }
  
  changeStatus(todo:Todo){
    this.todos.map(singleTodo => {
      if(todo.id == singleTodo.id){
          todo.isComplete=!todo.isComplete
      }
    })
  }


  deleteTodo(todo:Todo){
     const indexOf = this.todos.findIndex(

       (object) =>  object.id === todo.id
       
     )
     this.todos.splice(indexOf, 1)
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { Todo } from './../../moder/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[]
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((result) =>{
      this.todos=result
    })

   console.log(this.todos)

  }

  changeToStatus(todo:Todo){
  this.todoService.changeStatus(todo)


  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo)
  }





}

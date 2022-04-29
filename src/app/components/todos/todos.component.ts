import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];

  inputTodo:string = '';

  constructor() { }

  ngOnInit(): void {

  }

  toggleDone (id:number): void {
    this.todos.map((v, i) => {
      if (i === id) {
        v.complete = !v.complete;
      }

      return v;
    })
  }

  deleteTodo (id:number): void {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo (): void {
    this.todos.push({
      content: this.inputTodo,
      complete: false
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  // array of todo
  todos! : Todo[];
  inputTodo:string="";
  


  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'English Test',
        completed:false

      },
      {
        content:'Piano lessons',
        completed:false
      },
      {
        content:'Market',
        completed:true
      }

    ]
  }

  toggleDone (id: number){
    this.todos.map((v,i) => {
      if (i == id) v.completed =! v.completed ;

      return v ; 
    })
  }
 
  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(){
    this.todos.push({
      content:this.inputTodo,
      completed:false
    });

    //sera vide form apres l ajout :
    this.inputTodo="";

  }

}

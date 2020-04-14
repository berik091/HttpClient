import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo{
  completed:boolean;
  title:string;
  id?: number
}
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  todos: Todo[]=[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .subscribe(todos=>{
      console.log('Response', todos)
      this.todos=todos;
    })
  }

}

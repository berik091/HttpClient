import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name":"Berik", "age":28},
      {"id":2, "name":"SBerik", "age":28},
      {"id":3, "name":"Erik", "age":25},
      {"id":4, "name":"Erik", "age":20},
    ]
  }
}

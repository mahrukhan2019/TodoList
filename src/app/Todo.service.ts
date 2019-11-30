import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }


public addTask(todo){
return this.http.post("http://localhost:8080/add", todo, {responseType:'text' as 'json'});
}

public getAllTasks(){
  return this.http.get("http://localhost:8080/allTodos");
}

public deleteTask(id){
  return this.http.delete("http://localhost:8080/deleteTodo/" + id);
}


}

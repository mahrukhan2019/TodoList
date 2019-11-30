
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Todo.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  Todos: Todo;

  constructor(private service : TodoService) { }

public deleteTask(id: number){
  let resp = this.service.deleteTask(id);
  resp.subscribe((data)=> this.Todos = data);
}

  ngOnInit() {
   let resp = this.service.getAllTasks();
   resp.subscribe((data)=> this.Todos=data);

   
   
  }

}
 
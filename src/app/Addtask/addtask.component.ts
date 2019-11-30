import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Todo.service';
import { Todo } from '../Todo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddTaskComponent implements OnInit {

  todo: Todo = new Todo("");
  message: any;


  constructor(private service: TodoService, private router:Router) { }

  ngOnInit() {
  }

public addTaskNow(){

  let resp=this.service.addTask(this.todo);
  resp.subscribe((data)=>this.message=data);
  this.router.navigate(["/search"]);


}

}

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  myId = 4;

  newTask = {
    id: this.myId,
    title: '',
    description: ''
  };

  constructor(private listServ: TaskService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  addTask() {
    console.log('We will send the data', this.newTask);
    this.listServ.addTask(this.newTask);
    this.myId ++;
    this.newTask = {
      id: 0,
      title: '',
      description: ''
    };

  }

}

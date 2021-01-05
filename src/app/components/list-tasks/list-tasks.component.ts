import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

  @Output() sendPosition = new EventEmitter;

  myTasks: Task[];

  constructor(private listServ: TaskService) { }

  ngOnInit(): void {
    this.myTasks = this.listServ.getTasks();
    console.log('my tasks :' , this.myTasks);
  }

  deleteTask(_id) {
    this.listServ.deleteTask(_id);
  }

  getPositions(_id) {
    this.sendPosition.emit(_id);
  }

}

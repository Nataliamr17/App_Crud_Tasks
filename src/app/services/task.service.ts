import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

const TasksList = [
  {
    'id': 1,
    'title': 'do my homework',
    'description': 'it is boring'
  },
  {
    'id': 2,
    'title': 'clean my room',
    'description': 'it is boring too'
  },
  {
    'id': 3,
    'title': 'cook the dinner',
    'description': 'ooh shit!'
  },
]

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() {
    return TasksList;
  }

  getOneTask(_id) {
    return TasksList.find(task => task.id === _id);
  }

  addTask(task: Task) {
    TasksList.push(task);
  }

  editTask(newTaskEdit) {
    const index = TasksList.findIndex(task => task.id === newTaskEdit.id);

    TasksList[index] = newTaskEdit;
  }

  deleteTask(_id) {
    TasksList.splice(_id, 1);
  }

}

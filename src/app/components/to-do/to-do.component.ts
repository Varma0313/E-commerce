import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IToDo } from '../interface/to-do-interface';
import { TodoSortPipe } from '../pipes/todo-sort.pipe';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule, CommonModule, TodoSortPipe],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent implements OnInit, OnChanges {
  @Input() cardTitle!: string;
  @Output() sendToList = new EventEmitter<any>();

  addTask: string = '';
  toDo: IToDo[] = [];
  sortBy: 'completed' | 'created' | null = null;

  constructor() {}

  ngOnInit(): void {
    console.log('initlize', 'onChanges');
    this.getStorage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  addNewTask() {
    // this.toDo.push(this.addTask);
    // this.addTask = '';
    // this.sendToList.emit(this.toDo);
    // console.log('Check', this.toDo);
    let toDoItem: IToDo = {
      task: this.addTask,
      time: Date.now(),
      isCompleted: false,
    };
    this.addTask = '';
    // this.toDo.push(toDoItem); // mutability - modify the existing array
    this.toDo = [...this.toDo, toDoItem]; // immutability - every time new array create
    this.updateStorage();
  }

  // deleteNewTask(index: number) {
  //   this.toDo.splice(index, 1);
  // }

  markCompleted(item: IToDo) {
    this.toDo = this.toDo.map((toDoItem) => {
      if (toDoItem.time === item.time) {
        toDoItem.isCompleted = !toDoItem.isCompleted;
      }
      return toDoItem;
    });
    this.updateStorage();
  }

  deleteNewTask(item: IToDo) {
    this.toDo = this.toDo.filter((toDoItem: IToDo) => {
      if (item.time !== toDoItem.time) return toDoItem;
      return;
    });
    this.updateStorage();
  }

  sortByCompletedAction() {
    this.sortBy = 'completed';
  }

  sortByCreatedAction() {
    this.sortBy = 'created';
  }

  refresh() {
    this.sortBy = null;
  }

  ngOnDestroy(): void {
    this.toDo = [];
    this.addTask = '';
    console.log('Destroy', 'Component is destroyed');
  }

  getStorage() {
    try {
      let storageData: any = localStorage.getItem('my-todo');
      this.toDo = storageData ? JSON.parse(storageData) || [] : [];
    } catch (error) {}
  }

  updateStorage() {
    localStorage.setItem('my-todo', JSON.stringify(this.toDo));
  }
}

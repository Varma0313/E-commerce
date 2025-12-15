import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  setCardTitle = 'My ToDo';
  ToggleToDoList: boolean = false;
  captureEvent(event: any) {
    console.log('Event', event);
  }

  title = 'to-do';

  showAndHideToDo() {
    this.ToggleToDoList = !this.ToggleToDoList;
  }
}

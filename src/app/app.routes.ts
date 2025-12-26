import { Routes } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

export const routes: Routes = [
  { path: 'todo', component: ToDoComponent },
  { path: 'register', component: RegisterFormComponent },
];

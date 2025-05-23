import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';

export const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: 'about', component: AboutComponent },
];

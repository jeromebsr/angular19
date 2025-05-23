import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // c'est ça qui donne accès à HttpClient
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  todos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe({
        next: (data) => (this.todos = data),
        error: (err) => console.error(err),
      });
  }

  trackById(index: number, item: any): any {
    return item.id;
  }
}

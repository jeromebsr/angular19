import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-detail.component.html',
})
export class TodoDetailComponent {
  todoId: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.paramMap.subscribe((params) => {
      this.todoId = params.get('id');
      if (this.todoId) {
        this.http
          .get<any>('https://jsonplaceholder.typicode.com/todos/' + this.todoId)
          .subscribe({
            next: (data) => (this.todo = data),
            error: (err) => console.error(err),
          });
      }
    });
  }

  todo: any = null;

  trackById(index: number, item: any): any {
    return item.id;
  }
}

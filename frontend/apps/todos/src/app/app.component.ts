import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Todo {
  title: string;
}

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  constructor(private httpClient: HttpClient) {
    this.fetchData();
  }

  public fetchData() {
    this.httpClient.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  public addTodo() {
    this.httpClient.post('/api/addTodo', {}).subscribe(() => {
      this.fetchData();
    });
  }
}

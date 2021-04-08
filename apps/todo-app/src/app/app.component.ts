import { Component } from '@angular/core';
import { getStatus } from '@nx-lib-demo/todo-util/util';

import { sub } from '@nx-lib-demo/todo-util/calc';
import { TodoService } from '@nx-lib-demo/todo-common';
@Component({
  selector: 'nx-lib-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';

  status = getStatus('Active');

  constructor(private todoService: TodoService) {}

  todo$ = this.todoService.getTodoList();
}

import { Component } from '@angular/core';
import { getStatus } from '@nx-lib-demo/todo-util';
@Component({
  selector: 'nx-lib-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';

  status = getStatus("Active");
}

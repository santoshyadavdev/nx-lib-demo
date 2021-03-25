import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoSharedModule } from '@nx-lib-demo/todo-shared';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

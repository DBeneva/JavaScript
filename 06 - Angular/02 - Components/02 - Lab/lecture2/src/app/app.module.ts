import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: UserService,
    useClass: UserService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

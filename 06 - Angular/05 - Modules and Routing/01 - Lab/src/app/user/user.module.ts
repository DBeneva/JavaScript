import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserService } from './user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserListComponent, UserListItemComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService],
  exports: [UserListComponent]
})
export class UserModule { }

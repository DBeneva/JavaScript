import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './+store';
import { EffectsModule } from '@ngrx/effects';
import { UserDetailsEffects, UserListEffects } from './+store/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([
      UserListEffects,
      UserDetailsEffects
    ])
  ]
})
export class UserModule { }

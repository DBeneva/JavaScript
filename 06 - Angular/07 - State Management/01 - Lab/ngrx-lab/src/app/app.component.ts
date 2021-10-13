import { Component } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { clearAppState, incrementCounter, loadUsers, loadUsersFailure, loadUsersSuccess, setValue } from './+store/actions';
import { selectGlobalCounter, selectGlobalUsers, selectGlobalValue } from './+store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private store: Store<any>,
    private actions$: Actions
  ) { }

  isLoadingUsers$ = merge(
    this.actions$.pipe(ofType(loadUsers), mapTo(true)),
    this.actions$.pipe(ofType(loadUsersSuccess), mapTo(false)),
    this.actions$.pipe(ofType(loadUsersFailure), mapTo(false)),
    of(false)
  );

  counter$ = this.store.select(selectGlobalCounter);
  value$ = this.store.select(selectGlobalValue);
  users$ = this.store.select(selectGlobalUsers);

  incrementCounter(): void {
    this.store.dispatch(incrementCounter());
  }

  setValue(valueInput: HTMLInputElement) {
    this.store.dispatch(setValue({ value: valueInput.value }));
    valueInput.value = '';
  }

  loadUsers(): void {
    this.store.dispatch(loadUsers());
  }

  resetState(): void {
    this.store.dispatch(clearAppState());
  }
}

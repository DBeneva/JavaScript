import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.sass']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent implements OnInit {

  @Input() user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}

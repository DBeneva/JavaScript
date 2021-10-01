import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
    {
        path: 'user-list',
        component: UserListComponent
    },
    {
        path: 'user-details',
        component: UserDetailsComponent
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);
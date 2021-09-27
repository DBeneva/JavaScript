import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    }
    // {
    //     path: '**',
    //     component: ''
    // }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
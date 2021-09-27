import { Routes, RouterModule } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { NewThemeComponent } from '../theme/new-theme/new-theme.component';
import { ThemesComponent } from '../theme/themes/themes.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
    {
        path: 'themes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ThemesComponent
            },
            {
                path: ':themeId',
                component: ThemeComponent
            }
        ]
    },
    {
        path: 'add-theme',
        component: NewThemeComponent,
        canActivate: [AuthActivate],
        data: {
            authenticationRequired: true,
            authenticationFailureRedirectUrl: '/login'
        }
    }
];

export const ThemeRoutingModule = RouterModule.forChild(routes);
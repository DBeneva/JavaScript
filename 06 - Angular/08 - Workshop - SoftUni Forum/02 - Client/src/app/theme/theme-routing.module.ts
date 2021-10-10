import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { NewThemeComponent } from '../theme/new-theme/new-theme.component';
import { ThemesComponent } from '../theme/themes/themes.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ThemesComponent
    },
    {
        path: ':themeId',
        component: ThemeComponent
    },
    {
        path: 'add',
        component: NewThemeComponent,
        //canActivate: [AuthActivate],
        // data: {
        //     authRequired: true,
        //     authFailureRedirectUrl: '/user/login'
        // }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    // providers: [AuthActivate]
})

export class ThemeRoutingModule { }
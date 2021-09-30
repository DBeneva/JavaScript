import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { AsideComponent } from './aside/aside.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ThemeComponent,
    NewThemeComponent,
    ThemesComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ThemeRoutingModule,
    SharedModule
  ]
})
export class ThemeModule { }

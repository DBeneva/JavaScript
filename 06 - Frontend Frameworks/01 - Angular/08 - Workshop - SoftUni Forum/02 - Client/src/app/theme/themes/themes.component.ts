import { Component } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { IPost, ITheme } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-theme',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})

export class ThemesComponent {
  themes: ITheme[] | undefined;
  recentPosts: IPost[] | undefined;
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  user = this.userService.user;

  constructor(
    private contentService: ContentService,
    private userService: UserService
  ) {
    this.fetchThemes();
    this.fetchRecentPosts();
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }

  subscribe(themeId: string): void {
    this.contentService.subscribeToTheme(themeId).subscribe(() => this.fetchThemes());
  }

  unsubscribe(themeId: string): void {
    this.contentService.unsubscribeFromTheme(themeId).subscribe(() => this.fetchThemes());
  }
}

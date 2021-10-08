import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../content.service';
import { ITheme } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  theme: ITheme | undefined;
  isLogged = this.userService.isLogged;
  editingMode = false;
  postContent = '';
  postId = '';
  user = this.userService.user;
 
  constructor(
    private contentService: ContentService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute) {
    this.fetchTheme();
    this.editingMode = false;
    this.postId = '';
    this.postContent = '';
  }
  
  fetchTheme(): void {
    this.theme = undefined;
    const id = this.activatedRoute.snapshot.params.themeId;
    this.contentService.loadTheme(id).subscribe(theme => this.theme = theme);
  }

  likePost(postId: string) { 
    this.contentService.likePost(postId).subscribe(() => this.fetchTheme());
  }

  unlikePost(postId: string) {
    this.contentService.unlikePost(postId).subscribe(() => this.fetchTheme());
  }

  getEditingMode(postId: string, postContent: string) {
    this.editingMode = true;
    this.postContent = postContent;
    this.postId = postId;
    this.fetchTheme();
  }

  editPost(postText: string) {
    this.contentService.editPost(this.theme._id, this.postId, postText).subscribe(() => this.fetchTheme());
  }

  deletePost(postId: string) {
    this.contentService.deletePost(this.theme._id, postId).subscribe(() => this.fetchTheme());
  }

  postComment(form: NgForm) {
    if (form.invalid) return;
    console.log(form.value.postText);
    this.contentService.postComment(this.theme._id, form.value.postText).subscribe(() => this.fetchTheme());    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadTheme(id: string) {
    return this.http.get<ITheme>(`/api/themes/${id}`);
  }

  loadThemes() {
    return this.http.get<ITheme[]>('/api/themes');
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : '';
    return this.http.get<IPost[]>(`/api/posts${query}`);
  }

  saveTheme(data: any) {
    return this.http.post<ITheme>('/api/themes', data);
  }

  subscribeToTheme(themeId: string) {
    return this.http.put<ITheme>(`/api/themes/${themeId}`, {});
  }

  unsubscribeFromTheme(themeId: string) {
    return this.http.put<ITheme>(`/api/themes/${themeId}/unsubscribe`, {});
  }

  likePost(postId: string) {
    return this.http.put(`/api/likes/${postId}`, {});
  }

  unlikePost(postId: string) {
    return this.http.put(`/api/likes/${postId}/unlike`, {});
  }

  postComment(themeId: string, postText: string) {
    return this.http.post(`/api/themes/${themeId}`, { postText });
  }

  editPost(themeId: string, postId: string, postText: string) {
    return this.http.put(`/api/themes/${themeId}/posts/${postId}`, { postText });
  }

  deletePost(themeId: string, postId: string) {
    return this.http.delete(`/api/themes/${themeId}/posts/${postId}`);
  }
}

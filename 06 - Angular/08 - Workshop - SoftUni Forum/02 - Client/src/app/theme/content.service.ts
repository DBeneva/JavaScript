import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from '../shared/interfaces';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadTheme(id: string) {
    return this.http.get<ITheme>(`${API_URL}/themes/${id}`, { withCredentials: true });
  }

  loadThemes() {
    return this.http.get<ITheme[]>(`${API_URL}/themes`, { withCredentials: true });
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : '';
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`, { withCredentials: true });
  }

  saveTheme(data: any) {
    return this.http.post<ITheme>(`${API_URL}/themes`, data, { withCredentials: true });
  }

  subscribeToTheme(themeId: string) {
    return this.http.put<ITheme>(`${API_URL}/themes/${themeId}`, {}, { withCredentials: true });
  }

  unsubscribeFromTheme(themeId: string) {
    return this.http.put<ITheme>(`${API_URL}/themes/${themeId}/unsubscribe`, {}, { withCredentials: true });
  }

  likePost(postId: string) {
    return this.http.put(`${API_URL}/likes/${postId}`, {}, { withCredentials: true });
  }

  unlikePost(postId: string) {
    return this.http.put(`${API_URL}/likes/${postId}/unlike`, {}, { withCredentials: true });
  }

  postComment(themeId: string, postText: string) {
    return this.http.post(`${API_URL}/themes/${themeId}`, { postText }, { withCredentials: true });
  }

  editPost(themeId: string, postId: string, postText: string) {
    return this.http.put(`${API_URL}/themes/${themeId}/posts/${postId}`, { postText }, { withCredentials: true });
  }

  deletePost(themeId: string, postId: string) {
    return this.http.delete(`${API_URL}/themes/${themeId}/posts/${postId}`, { withCredentials: true });
  }
}

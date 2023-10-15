import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiBaseUrl;

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  getPostById(postId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${postId}`);
  }
}

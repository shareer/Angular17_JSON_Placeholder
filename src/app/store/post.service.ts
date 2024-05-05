import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { Post } from "../interface/post.type";
import { API_ENDPOINTS, BASE_URL } from "../utils/constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor (private http: HttpClient) {}

  getCards(): Observable<Post[]> {
    return this.http.get<Post[]>(`${BASE_URL}${API_ENDPOINTS.POSTS}`).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        throw error;
      })
    );
  }
}
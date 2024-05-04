import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor (private http: HttpClient) {}

  BASE_URL = 'https://jsonplaceholder.typicode.com';

  getCards() {
    return this.http.get(`${this.BASE_URL}/posts`);  // Todo 
  }
}
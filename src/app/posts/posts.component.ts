import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  httpClient = inject(HttpClient);
  postData: any = []; //TODO change type
  activeCardIndex: number | null = null;


  ngOnInit(): void {
    this.fetchPosts();
  }

  setActiveCard(index: number) {
    this.activeCardIndex = index;
  }
  
  fetchPosts(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
      this.postData = data;
      console.log(this.postData);
    })
  }
}

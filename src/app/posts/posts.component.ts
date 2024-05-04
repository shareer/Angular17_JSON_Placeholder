import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as  PostActions from '../store/post.action';
import { currentPostId, selectPosts } from '../store/post.selector';
import { CardComponent } from '../components/card/card.component';
import { Post } from '../interface/post.type';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  httpClient = inject(HttpClient);
  postData: Post[] = []; 
  selectedCardId: number = 0;
  activeCardIndex: number | null = null;


  constructor(private store: Store<{ posts: Post[] }>) {
  }


  ngOnInit(): void {
    this.fetchPosts();
    this.store.pipe(select(selectPosts)).subscribe(data => {
      this.postData = data
    })
    this.store.pipe(select(currentPostId)).subscribe(selectedCard => {
      this.selectedCardId = selectedCard?.id;
    })
  }

  fetchPosts() {
    this.store.dispatch(PostActions.requestPost());
  }
}

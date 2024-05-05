import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  postData: Post[] = [];
  selectedCardId: number | null | undefined = 0; 
  activeCardIndex: number | null = null;
  shouldShowScrollToTopButton: boolean = false;


  constructor(private store: Store<{ posts: Post[] }>) {
  }

  ngOnInit(): void {
    this.getPosts();
    this.store.pipe(select(selectPosts)).subscribe(data => {
      this.postData = data
    })
    this.store.pipe(select(currentPostId)).subscribe(selectedCard => {
      this.selectedCardId = selectedCard?.id;
    })
  }

  // Scroll to top when the button is clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    this.shouldShowScrollToTopButton = yOffset > 200; // Adjust the threshold as needed
  }

  getPosts() {
    this.store.dispatch(PostActions.fetchPosts());
  }
}

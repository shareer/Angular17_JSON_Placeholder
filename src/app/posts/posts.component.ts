import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as  PostActions from '../store/post.action';
import { Observable } from 'rxjs';
import { currentPostId, selectPosts } from '../store/post.selector';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  httpClient = inject(HttpClient);
  postData: any = []; //TODO change type
  activeCardIndex: number | null = null;
  cardKeyArry = ["userId", "id", "title", "body"];
  selectedCardId: number = 0;


  constructor(private store: Store<{ posts: any}>) {
  }


  ngOnInit(): void {
   this.fetchPosts();
   this.store.pipe(select(selectPosts)).subscribe(data=>{
    this.postData = data
  })


  this.store.pipe(select(currentPostId)).subscribe(selectedCard=>{
     this.selectedCardId = selectedCard?.id;
  })

  }

  setActiveCard(index: number, card: any): void { // TODO CHANGE TYPE
    // console.log(this.store, 'this.store');
    // card.displayNumber = index+1;
    // card.displayValue = card?.cardKeyArry[card.displayNumber];

    // DISPATCH displayNumber here
     // DISPATCH displayValue here

    this.activeCardIndex = index;
  }
  
  fetchPosts(){
     this.store.dispatch(PostActions.requestPost());
    // this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
    //   this.postData = data;
    //   console.log(this.postData);
    // })
  }

  // onCardUpdateEvent(eventData: { cardId: number }){
  //   console.log(eventData.cardId);
  //   // this.selectedCardId = eventData.cardId;
  // }
}

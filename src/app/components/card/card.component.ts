import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { setCurrentSelectedPost } from '../../store/post.action';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { CommonModule } from '@angular/common';
import { currentPostId } from '../../store/post.selector';
import { Post } from '../../interface/post.type';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotateY(180deg)"
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")])
    ])
  ]
})
export class CardComponent {
  @Input() post: Post = {
    id: null,
    userId: null,
    body: "",
    title: ""
};  
  @Input() selectedCardId: number = 0; 
  displayValue: string | number | null = null;
  currentDisplayType: string = 'title';
  cardState: "default" | "flipped" = 'default';
  curIndex = 0;


  constructor(private store: Store) { }

  ngOnInit() {
    this.displayValue = this.post.title;

    this.store.pipe(select(currentPostId)).subscribe(selectedCard=>{
      if(selectedCard?.id  != this.post.id){
        this.displayValue = this.post.title;
        this.curIndex = 0;
        this.currentDisplayType = 'title';
      }
   })
  }


  isCardSelected(): boolean {
    return this.selectedCardId == this.post.id;
  }

  onSelectCard(post:Post) {
    let postValues = Object.keys(post).filter(key => key !== 'title').concat('title');
    const curProperty = postValues[this.curIndex];
    this.displayValue = post[curProperty as keyof Post];
    this.currentDisplayType = curProperty;

    // move to next
    this.curIndex = (this.curIndex + 1) < postValues.length ? this.curIndex + 1 : 0;

    //update store
    this.store.dispatch(setCurrentSelectedPost({ post: post }));

    if (this.cardState === "default") {
      this.cardState = "flipped";
    } else {
      this.cardState = "default";
    }
  }

  // onSelectCard(post: any) {
  //   if (this.cardState === "default") {
  //     this.cardState = "flipped";
  //   } else {
  //     this.cardState = "default";
  //   }
  //   if (this.selectedCardId != post.id) {
  //     console.log("dispatch nowww");

  //     this.store.dispatch(setCurrentSelectedPost({ post: post }));
  //   }

  //   console.log("active card id from store is :: " + this.selectedCardId)
  //   console.log("clicked card id is :: " + post.id)

  //   switch (this.currentDisplayType) {
  //     case 'title':
  //       this.displayValue = post.userId;
  //       this.currentDisplayType = 'userId';
  //       break;
  //     case 'userId':
  //       this.displayValue = post.id;
  //       this.currentDisplayType = 'id';
  //       break;
  //     case 'id':
  //       this.displayValue = post.body;
  //       this.currentDisplayType = 'body';
  //       break;
  //     case 'body':
  //       this.displayValue = post.title;
  //       this.currentDisplayType = 'title';
  //       break;
  //     default:
  //       this.displayValue = post.title;
  //       this.currentDisplayType = 'title';
  //       break;
  //   }
  // }
}

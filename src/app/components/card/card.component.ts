import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { setCurrentSelectedPost } from '../../store/post.action';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { CommonModule } from '@angular/common';

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
      // state(
      //   "doubleFlip",
      //   style({
      //     visibility: "false",
      //     transform: "rotateY(320deg)",
      //     opacity: 0
      //   })
      // ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      //  transition("* => matched", [animate("400ms")])
    ])
  ]
})
export class CardComponent {
  @Input() post: any;
  @Input() selectedCardId: any;
  displayValue: string = "";
  currentDisplayType: string = 'title';
  cardState: "default" | "flipped"= 'default';



  constructor(private store: Store) { }

  ngOnInit() {
    this.displayValue = this.post.title;
  }

  isCardSelected(): boolean {
    return this.selectedCardId == this.post.id;
  }

  onSelectCard(post: any) {
    if (this.cardState === "default") {
      this.cardState = "flipped";
    } else {
      this.cardState = "default";
    }
    if (this.selectedCardId != post.id) {
      console.log("dispatch nowww");

      this.store.dispatch(setCurrentSelectedPost({ post: post }));
    }

    console.log("active card id from store is :: " + this.selectedCardId)
    console.log("clicked card id is :: " + post.id)

    switch (this.currentDisplayType) {
      case 'title':
        this.displayValue = post.userId;
        this.currentDisplayType = 'userId';
        break;
      case 'userId':
        this.displayValue = post.id;
        this.currentDisplayType = 'id';
        break;
      case 'id':
        this.displayValue = post.body;
        this.currentDisplayType = 'body';
        break;
      case 'body':
        this.displayValue = post.title;
        this.currentDisplayType = 'title';
        break;
      default:
        this.displayValue = post.title;
        this.currentDisplayType = 'title';
        break;
    }
  }
}

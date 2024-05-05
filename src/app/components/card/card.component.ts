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
  @Input() selectedCardId: number | null | undefined = 0;
  displayValue: string | number | null = null;
  displayKey: string = 'title';
  cardState: "default" | "flipped" = 'default';
  currentIndex = 0;

  constructor(private store: Store) { }

  ngOnInit() {
    this.displayValue = this.post.title; // set title as default display value
    this.store.pipe(select(currentPostId)).subscribe(selectedCard => {
      if (selectedCard?.id != this.post.id) {
        this.displayValue = this.post.title;
        this.currentIndex = 0;
        this.displayKey = 'title';
      }
    })
  }

  isCardSelected(): boolean {
    return this.selectedCardId === this.post.id;
  }

  /**
   * Handles the selection of a card and updates the display and state accordingly.
   * 
   * @param post The post object associated with the selected card.
   */
  handleCardSelection(post: Post) {
    //Extracts the keys of the post object excluding 'title', and appends 'title' to the array.
    let postValues = Object.keys(post).filter(key => key !== 'title').concat('title');
    const currentProperty = postValues[this.currentIndex];
    this.displayValue = post[currentProperty as keyof Post];
    this.displayKey = currentProperty;

    // move to the next property of loops back to the beginning if end is reached
    this.currentIndex = (this.currentIndex + 1) < postValues.length ? this.currentIndex + 1 : 0;

    // update store only is a new card is clicked
    if (post.id !== this.selectedCardId) {
      this.store.dispatch(setCurrentSelectedPost({ post }));
    }
    // Toggle the state of the card
    this.cardState = this.cardState === "default" ? "flipped" : "default";
  }
}

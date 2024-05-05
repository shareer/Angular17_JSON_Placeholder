import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Post } from '../../interface/post.type';
import { currentPostId } from '../../store/post.selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedCardId: number | null | undefined = null;
  constructor(private store: Store<{ posts: Post[] }>) {
  }
  ngOnInit(): void {
    this.store.pipe(select(currentPostId)).subscribe(selectedCard => {
      this.selectedCardId = selectedCard?.id; 
    })
  }
}

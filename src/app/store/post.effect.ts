import { inject } from '@angular/core';
import { exhaustMap, map } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from './post.service';
import * as  PostActions from './post.action';


export const loadPosts = createEffect(
  (actions$ = inject(Actions), postService = inject(PostService)) => {
    return actions$.pipe(
      ofType(PostActions.fetchPosts),
      exhaustMap(() =>
        postService.getCards().pipe(
          map((posts) => PostActions.receivePosts({posts})))
        )
    );
  },
  { functional: true }
);

import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { PostService } from './post.service';
import * as  PostActions from './post.action';


export const loadPosts = createEffect(
  (actions$ = inject(Actions), postService = inject(PostService)) => {
    return actions$.pipe(
      ofType(PostActions.requestPost),
      exhaustMap(() =>
        postService.getCards().pipe(
          map((post) => PostActions.recievetPost({post})))
        )
    );
  },
  { functional: true }
);

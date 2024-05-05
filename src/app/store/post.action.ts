import { createAction, props } from '@ngrx/store';
import { Post } from '../interface/post.type';

export const fetchPosts = createAction(
  '[Post] Fetch Posts'
);

export const receivePosts = createAction(
  '[Post] Receive Posts',
  props<{ posts: Post[] }>()
);

export const setCurrentSelectedPost = createAction(
  '[Post] Set Current Selected Post',
  props<{ post: Post }>()
);


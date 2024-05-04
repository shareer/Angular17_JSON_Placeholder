import { createReducer, on } from "@ngrx/store";
import * as  PostActions from './post.action'

export const initialState = {   // Todo type
  posts: [],
  currentSelected:undefined
};

export const postsReducer = createReducer(
  initialState,
  on(PostActions.recievetPost, (state, { post}) => {
    return {
        ...state,
        posts:post
    }
  }),

  on(PostActions.setCurrentSelectedPost, (state, { post}) => {
    return {
        ...state,
        currentSelected: post
    }
  }),
);
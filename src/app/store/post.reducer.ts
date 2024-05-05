import { createReducer, on } from "@ngrx/store";
import * as  PostActions from './post.action'
import { Post, PostFeatureState } from "../interface/post.type";


export const initialState: PostFeatureState = { 
  posts: [],
  currentSelected:null
};

export const postsReducer = createReducer(
  initialState,
  on(PostActions.receivePosts, (state, { posts}) => {
    return {
        ...state,
        posts: [...posts]
    }
  }),

  on(PostActions.setCurrentSelectedPost, (state, { post}) => {
    return {
        ...state,
        currentSelected: post
    }
  }),
);
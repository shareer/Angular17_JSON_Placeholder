import { State, createFeatureSelector, createSelector } from '@ngrx/store';


export const getPostState = createFeatureSelector<any>('posts'); //TODO

export const selectPosts = createSelector(
  getPostState,
  (state) => {
     return state.posts
  }
);

export const selectPostState = (state:any) => state;

export const currentPostId = createSelector(
  getPostState,
  (state) => {
     return state.currentSelected
  }
);
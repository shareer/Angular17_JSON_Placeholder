import { State, createFeatureSelector, createSelector } from '@ngrx/store';
import { PostFeatureState } from '../interface/post.type';


export const getPostState = createFeatureSelector<PostFeatureState>('posts');

export const selectPosts = createSelector(
  getPostState,
  (state: PostFeatureState) => state?.posts
);

export const selectPostState = (state: PostFeatureState) => state;

export const currentPostId = createSelector(
  getPostState,
  (state: PostFeatureState) => state?.currentSelected
);
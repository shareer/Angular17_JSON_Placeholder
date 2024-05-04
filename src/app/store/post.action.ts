import { createAction, props } from '@ngrx/store';

export const requestPost = createAction(
  '[Post] GET'
);

export const recievetPost = createAction(
 '[Post] Recieve',
  props<{ post:any }>()  // TODO change type
);


export const setCurrentSelectedPost = createAction(
  '[SET CURRENT POST] Recieve',
   props<{ post:any }>()  // TODO change type
 );





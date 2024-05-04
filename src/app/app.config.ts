import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { postsReducer } from './store/post.reducer';
import * as postEffects from './store/post.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), importProvidersFrom(BrowserAnimationsModule),provideStore({
        posts: postsReducer
    }), provideEffects(postEffects), provideStoreDevtools({ maxAge: 25 })]
};

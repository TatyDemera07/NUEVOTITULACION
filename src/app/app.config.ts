import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient, withFetch, withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { Observable } from 'rxjs/internal/Observable';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([])
    ),
  ],
}


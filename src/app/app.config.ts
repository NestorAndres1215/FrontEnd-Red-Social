import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptorFn } from './core/interceptors/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuración de la zona para la detección de cambios
    provideRouter(routes),  
    // Configuración de la localización
    provideHttpClient(withInterceptors([authInterceptorFn])),
  ]
};
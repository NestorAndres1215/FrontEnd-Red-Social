import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { authInterceptorFn } from './features/interceptors/auth-interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuración de la zona para la detección de cambios
    provideRouter(routes),  
    // Configuración de la localización
    provideHttpClient(withInterceptors([authInterceptorFn])),
  ]
};
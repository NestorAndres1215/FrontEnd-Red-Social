import { Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login-guard';

export const routes: Routes = [

    // Redirige la ruta vacía a 'principal'
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    // Carga el módulo de 'principal'
    { path: 'principal', loadChildren: () => import('./layout/auth/modules/home/home-module').then(m => m.HomeModule) },
    // Carga el módulo de 'registro'
    {
        path: 'registro',
        loadChildren: () => import('../app/layout/auth/modules/registro-auth/registro-auth-module').then(m => m.RegistroAuthModule),
        canLoad: [LoginGuard]
    },
    /*
    {
        path: 'servicio-ayuda',
        loadChildren: () => import('../app/layout/contacts/modules/servicio-ayuda/servicio-ayuda-module').then(m => m.ServicioAyudaModule),
        canLoad: [LoginGuard]
    },*/


    {
        path: 'olvidar-contrasena',
        loadChildren: () => import('../app/layout/auth/modules/olvidar-contrasena/olvidar-contrasena-module').then(m => m.OlvidarContrasenaModule),
        canLoad: [LoginGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./layout/auth/modules/login/login-module').then(m => m.LoginModule),
        canLoad: [LoginGuard]
    },





];

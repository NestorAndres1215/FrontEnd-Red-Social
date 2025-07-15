import { Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login-guard';

import { AdminGuard } from './core/guards/admin-guard';
import { HomeNormal } from './layout/normal/components/home-normal/home-normal';
import { NormalGuard } from './core/guards/normal-guard';
import { HomeAdmin } from './layout/admin/components/home-admin/home-admin';

export const routes: Routes = [

    // Redirige la ruta vacía a 'principal'
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    // Carga el módulo de 'principal'
    { path: 'principal', loadChildren: () => import('./layout/auth/modules/home/home-module').then(m => m.HomeModule) },
    // Carga el módulo de 'registro'
    {
        path: 'registro',
        loadChildren: () => import('./layout/auth/modules/registro-auth/registro-auth-module').then(m => m.RegistroAuthModule),
        canLoad: [LoginGuard]
    },
    {
        path: 'cuenta-bloqueada',
        loadChildren: () => import('./layout/auth/modules/bloqueo-error/bloqueo-error-module').then(m => m.BloqueoErrorModule),
        //    canLoad: [LoginGuard]
    },
    {
        path: 'codigo-verificacion',
        loadChildren: () => import('./layout/auth/modules/codigo-verificacion/codigo-verificacion-module').then(m => m.CodigoVerificacionModule),
        //    canLoad: [LoginGuard]
    },
        {
        path: 'cuenta-suspendida',
        loadChildren: () => import('./layout/auth/modules/suspendido-error/suspendido-error-module').then(m=>m.SuspendidoErrorModule),
        //    canLoad: [LoginGuard]
    },
    /*
    {
        path: 'servicio-ayuda',
        loadChildren: () => import('../app/layout/contacts/modules/servicio-ayuda/servicio-ayuda-module').then(m => m.ServicioAyudaModule),
        canLoad: [LoginGuard]
    },*/


    {
        path: 'olvidar-contrasena',
        loadChildren: () => import('./layout/auth/modules/olvidar-contrasena/olvidar-contrasena-module').then(m => m.OlvidarContrasenaModule),
        canLoad: [LoginGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./layout/auth/modules/login/login-module').then(m => m.LoginModule),
        canLoad: [LoginGuard]
    },

    {
        path: '',
        component: HomeAdmin,
        canActivate: [AdminGuard],
        children: [
            { path: 'administrador', loadChildren: () => import('./layout/admin/modules/admin/admin-module').then(m => m.AdminModule) },
            { path: 'usuarios/activos', loadChildren: () => import('./layout/admin/modules/usuarios/usuarios-module').then(m => m.UsuariosModule) }
        ]
    },


    {
        path: '',
        component: HomeNormal,
        canActivate: [NormalGuard],
        children: [
            // Carga el módulo de 'home-admin'
            { path: 'inicio', loadChildren: () => import('./layout/normal/modules/normal/normal-module').then(m => m.NormalModule) },
        ]
    },

];

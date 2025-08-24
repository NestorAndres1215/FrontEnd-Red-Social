import { Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login-guard';

import { AdminGuard } from './core/guards/admin-guard';
import { HomeNormal } from './layout/normal/components/home-normal/home-normal';
import { NormalGuard } from './core/guards/normal-guard';
import { HomeAdmin } from './layout/admin/components/home-admin/home-admin';
import { ModeradorGuard } from './core/guards/moderador-guard';
import { HomeModerador } from './layout/moderador/components/home-moderador/home-moderador';
import { VerificacionGuard } from './core/guards/verificacion-guard';
import { bloqueoGuard } from './core/guards/bloqueo-guard';
import { Error } from './shared/components/error/error';

export const routes: Routes = [

    // Redirige la ruta vacía a 'principal'
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    // Carga el módulo de 'principal'
    { path: 'principal', loadChildren: () => import('./layout/auth/modules/home/home-module').then(m => m.HomeModule) },
    { path: 'error', component: Error },
    // Carga el módulo de 'registro'
    {
        path: 'registro',
        loadChildren: () => import('./layout/auth/modules/registro-auth/registro-auth-module').then(m => m.RegistroAuthModule),
        canLoad: [LoginGuard]
    },
    {
        path: 'cuenta-bloqueada',
        loadChildren: () => import('./layout/auth/modules/bloqueo-error/bloqueo-error-module').then(m => m.BloqueoErrorModule),
        // canActivate: [bloqueoGuard]
    },
    {
        path: 'codigo-verificacion',
        loadChildren: () => import('./layout/auth/modules/codigo-verificacion/codigo-verificacion-module').then(m => m.CodigoVerificacionModule),
        //    canLoad: [LoginGuard]
    },
    {
        path: 'cuenta-suspendida',
        loadChildren: () => import('./layout/auth/modules/suspendido-error/suspendido-error-module').then(m => m.SuspendidoErrorModule),
        //canLoad: [LoginGuard]
    },
    {
        path: 'verificacion-correo',
        loadChildren: () => import('./layout/auth/modules/verificacion-correo/verificacion-correo-module').then(m => m.VerificacionCorreoModule),

    },
    {
        path: 'verificacion-cuenta',
        loadChildren: () => import('./layout/auth/modules/suspension-esperar/suspension-esperar-module').then(m => m.SuspensionEsperarModule),

    },


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
            { path: 'usuarios/activos', loadChildren: () => import('./layout/admin/modules/usuarios/usuarios-module').then(m => m.UsuariosModule) },
            { path: 'usuarios', loadChildren: () => import('./layout/admin/modules/usuarios/usuarios-module').then(m => m.UsuariosModule) }
        ]
    },
    {
        path: '',
        component: HomeModerador,
        canActivate: [ModeradorGuard],
        children: [
            { path: 'moderador', loadChildren: () => import('./layout/moderador/modules/moderador/moderador-module').then(m => m.ModeradorModule) },
            { path: 'usuarios', loadChildren: () => import('./layout/moderador/modules/usuarios/usuarios-module').then(m => m.UsuariosModule) },
            { path: 'usuarios-moderadores', loadChildren: () => import('./layout/moderador/modules/moderador-user/moderador-user-module').then(m => m.ModeradorUserModule) },
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

import { Routes } from '@angular/router';

export const routes: Routes = [

    // Redirige la ruta vacía a 'principal'
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    // Carga el módulo de 'principal'
    { path: 'principal', loadChildren: () => import('../app/layout/auth/modules/home/home.module').then(m => m.HomeModule) },
];

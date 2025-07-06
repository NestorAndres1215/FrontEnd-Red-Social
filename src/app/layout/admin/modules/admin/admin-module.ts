import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';

import { PrincipalAdmin } from '../../components/principal-admin/principal-admin';
import { AdminNavbar } from '../../../../shared/components/navbar/admin-navbar/admin-navbar';
import { HomeAdmin } from '../../components/home-admin/home-admin';


@NgModule({
  declarations: [],
  imports: [
    HomeAdmin,
    PrincipalAdmin,
    AdminNavbar,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalRoutingModule } from './normal-routing-module';
import { PrincipalNormal } from '../../components/principal-normal/principal-normal';
import { HomeNormal } from '../../components/home-normal/home-normal';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    PrincipalNormal, 
    HomeNormal,
    NormalRoutingModule
  ]
})
export class NormalModule { }

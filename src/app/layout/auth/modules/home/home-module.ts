import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from '../../components/home/home';
import { HomeRoutingModule } from './home-routing-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    Home,
    HomeRoutingModule
  ]
})
export class HomeModule { }
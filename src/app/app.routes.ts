import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { createComponent } from '@angular/core';
import { CreatenoteComponent } from './components/createnote/createnote.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'notebook', component: CreatenoteComponent}
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreatenoteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

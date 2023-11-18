import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBaseComponent } from './base/app-base/app-base.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: AppBaseComponent, children: [
    { path: 'app/:slug' , component: AppPageComponent},
    {path:'', component: HomeComponent},
    {path:'*', redirectTo: ''}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

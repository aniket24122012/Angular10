import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'',
    component:HomeComponent
  }
  ,
  {
    path:'**',
    component:NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

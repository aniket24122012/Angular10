import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about',
    children:[
      {
        path:'company',component:AboutCompanyComponent
      }
    ]
    
    
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

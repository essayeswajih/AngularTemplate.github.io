import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageInConstructionComponent } from './pages/page-in-construction/page-in-construction.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  {
     path: '',
     component: HomeComponent
   }
  ,
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'About',
    component:PageNotFoundComponent
  },
  {
    path:'Contact',
    component:PageInConstructionComponent
  },
  {
    path:'SignIn',
    component:SignInComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

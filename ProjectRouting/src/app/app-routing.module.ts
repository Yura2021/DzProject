import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorContactsRouteComponent } from './director-contacts-route/director-contacts-route.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { InfoComponent } from './info/info.component';
import { LoginRouteComponent } from './login-route/login-route.component';
import { NavComponent } from './nav/nav.component';
import { PageUndefineComponent } from './page-undefine/page-undefine.component';
import { ProfileRouteComponent } from './profile-route/profile-route.component';

const routes: Routes = [
 /*  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginRouteComponent },
{ path: '**', component: PageUndefineComponent }, */
{ path: '', redirectTo: '/nav', pathMatch: 'full'},
{ path: 'login-route', component: LoginRouteComponent },
  {
    path: 'home-route',
    component: HomeRouteComponent,
    children: [
      { path: 'profile-route', component: ProfileRouteComponent },
    ],
  },
 /*  {
    path: 'contacts',
    redirectTo: '/home-route',
    pathMatch: 'full',
    children: [
      {
        path: 'director',
        component: DirectorContactsRouteComponent,
      },
    ],
  }, */
  { path: '**', component: LoginRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

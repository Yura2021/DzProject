import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorContactsRouteComponent } from './director-contacts-route/director-contacts-route.component';
import { DiscountInfoComponent } from './discount-info/discount-info.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LoginRouteComponent } from './login-route/login-route.component';
import { PageUndefineComponent } from './page-undefine/page-undefine.component';
import { ProfileRouteComponent } from './profile-route/profile-route.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginRouteComponent },
  {
    path: 'home',
    component: HomeRouteComponent,
    children: [
      { path: 'profile', component: ProfileRouteComponent },
      { path: 'director', component: DirectorContactsRouteComponent },
      {
        path: 'home',
        component: HomeComponent,
        children: [{
          path: 'profile/:id',
          component: ProfileComponent,
          data: { breadcrumbs: 'Profile info' }
        }
        ]
      }

    ],
  },
  { path: 'discount-info', component: DiscountInfoComponent, outlet: 'discount' },
  { path: '**', component: PageUndefineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

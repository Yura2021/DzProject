import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { PageUndefineComponent } from './page-undefine/page-undefine.component';
import { LoginRouteComponent } from './login-route/login-route.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { ProfileRouteComponent } from './profile-route/profile-route.component';
import { DirectorContactsRouteComponent } from './director-contacts-route/director-contacts-route.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DiscountInfoComponent } from './discount-info/discount-info.component';
@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    PageUndefineComponent,
    LoginRouteComponent,
    HomeRouteComponent,
    ProfileRouteComponent,
    DirectorContactsRouteComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    DiscountInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

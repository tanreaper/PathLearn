import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from 'ng-sidebar';
import { TestComponent } from './test/test.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AuthComponent,
    DashboardComponent,
    TestComponent,
    LoadingSpinnerComponent,
    TicketComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    DashboardModule,
    NgxYoutubePlayerModule.forRoot(),
    SidebarModule.forRoot(),
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

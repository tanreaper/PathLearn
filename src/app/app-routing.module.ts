import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestComponent } from './test/test.component';
// import { TradeAnalysisComponent } from './trade-analysis/trade-analysis.component';
// import { TestComponent } from './test/test.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { AuthComponent } from './auth/auth.component';
// import { LandingPage2 } from './landing-page2/landing-page2.component';
// import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'Register', component: AuthComponent },
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'test', component: TestComponent }
  // { path: '', component:  TradeAnalysisComponent },
//   { path: 'test', component: TestComponent },
//   { path: '', component: LandingPage2 },
//   { path: 'Dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

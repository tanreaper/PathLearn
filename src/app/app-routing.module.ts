import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlashcardDetailsComponent } from './dashboard/flashcard-details/flashcard-details.component';
import { FlashcardListComponent } from './dashboard/flashcardlist/flashcardlist.component';
import { VideoComponent } from './dashboard/video/video.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestComponent } from './test/test.component';
import { TicketComponent } from './ticket/ticket.component';
// import { TradeAnalysisComponent } from './trade-analysis/trade-analysis.component';
// import { TestComponent } from './test/test.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { AuthComponent } from './auth/auth.component';
// import { LandingPage2 } from './landing-page2/landing-page2.component';
// import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'Register', component: AuthComponent },
    { path: 'Dashboard', component: DashboardComponent,
            children: [
                   { path: 'videos/:id', component: VideoComponent },
                   { path: 'flashcard', component: FlashcardListComponent },
                   { path: 'flashcard/details', component: FlashcardDetailsComponent },
                   { path: 'flashcard/details/:id', component: FlashcardDetailsComponent}
               ]},
    { path: 'test', component: TestComponent },
    { path: 'Ticket', component: TicketComponent}
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

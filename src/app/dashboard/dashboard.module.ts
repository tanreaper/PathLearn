import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { VideoComponent } from './video/video.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FlashcardListComponent } from './flashcardlist/flashcardlist.component';
import { ContentRouteComponent } from './content-route/content-route.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { FlashcardDetailsComponent } from './flashcard-details/flashcard-details.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



// export const routes: Routes = [
//     { 
//         path: 'Dashboard', 
//         component: DashboardComponent,
//          children: [
//              {
//              path: 'videos', component: VideoComponent
//              }
//          ]
//     }
// ]

@NgModule({
    declarations: [
        VideoComponent,
        ContentRouteComponent,
        FlashcardComponent,
        FlashcardListComponent,
        FlashcardDetailsComponent
        
    ],
    imports: [
        BrowserModule,
        SidebarModule.forRoot(),
        NgxYoutubePlayerModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
})
export class DashboardModule {

}
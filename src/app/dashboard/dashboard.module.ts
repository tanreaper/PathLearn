import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { VideoComponent } from './video/video.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



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
        
    ],
    imports: [
        BrowserModule,
        SidebarModule.forRoot(),
        NgxYoutubePlayerModule.forRoot(),
        MDBBootstrapModule.forRoot(),
    ],
    providers: [],
})
export class DashboardModule {

}
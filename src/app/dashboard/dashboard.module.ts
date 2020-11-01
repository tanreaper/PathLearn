import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';


@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        SidebarModule.forRoot()
    ],
    providers: [],
})
export class DashboardModule {

}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { Subscription } from 'rxjs';
import { DashboardService } from './dashboard.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy{
    opened = false;
    openedRight = false; 
    course: any = [];
    course1: any;
    course2: any;
    course1Load:boolean = false;
    course2Load:boolean = false;
    topic: any = [];
    addTopic: any = [];
    postcourseService: Subscription;
    getcourseService: Subscription;
    isDashboard: boolean = true;
    subTopic: any;

    constructor(private dashboardService: DashboardService, private router: Router, private route: ActivatedRoute) {
        this.isDashboard = true;
    }

    ngOnInit(): void {
        console.log('ngOninit from Dashboard')
        this.isDashboard = true
    }

    ngOnDestroy(): void {

    }

    toggleSidebar() {
        this.opened = !this.opened
    }
    toggleRightSidebar() {
        this.openedRight = !this.openedRight
    }

    showCourseModal() {
        console.log("test");
    }
    onSubmitCourse(form: NgForm) {
        var course = null;
        this.course1 = form.value.course1;
        this.course2 = form.value.course2;
        this.course.push(form.value.course1);
        this.course.push(form.value.course2);
        console.log(this.course);
        // this.postcourseService = this.dashboardService.postCourseData(this.course).subscribe(
        //     res => {
        //         // console.log(res);

        //     }
        // )
        this.course1Load = true;
        console.log(this.course1);
        console.log(this.course2);

    }
    onSubmitTopic(form: NgForm) {
        console.log(form);
        this.topic.push(form.value.topic1);
        this.topic.push(form.value.topic2);
        console.log(this.topic);
    }

    changeTopicPath(topic: any) {
        this.isDashboard = false;
        console.log(this.router.url);
        const tree: UrlTree = this.router.parseUrl(this.router.url);
        const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        const s: UrlSegment[] = g.segments;
        console.log(g);
        console.log(s);
        this.router.navigate(['/Dashboard/videos', topic]);  
        console.log(this.route.snapshot.url);

    }
    changeToVideo() {
        // TODO
    }
    changePathToFlashcard() {
        this.isDashboard = false;
        this.router.navigate(['/Dashboard/flashcard'])
    }
    
}
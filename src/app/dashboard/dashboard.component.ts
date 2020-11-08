import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
    opened = false;
    openedRight = false;
    course1: any;
    course2: any;
    course1Load:boolean = false;
    course2Load:boolean = false;
    topic: any = [];
    addTopic: any = [];

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
        this.course1 = form.value.course1;
        this.course2 = form.value.course2;
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
    
}
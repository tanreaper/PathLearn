import { EventEmitter } from '@angular/core';
import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-flashcard',
    templateUrl: './flashcard.component.html',
    styleUrls: ['./flashcard.component.scss']
})

export class FlashcardComponent implements OnInit {

    @Input() title: string;
    @Input() body: string;
    @Input() link: string;
    @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();
    @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;
    @ViewChild('truncator') truncator: ElementRef<HTMLElement>;

    constructor(private renderer: Renderer2) { }

    ngOnInit() {
        // let style = window.getComputedStyle(this.bodyText.nativeElement, null);
        // let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

        // if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
        //     this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
        // } else {
        //     this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
        // }
    }
    onXButtonClick() {
        console.log('XbuttonClicked');
        this.deleteEvent.emit();
    }
}
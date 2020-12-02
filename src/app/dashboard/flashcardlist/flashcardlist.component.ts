import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { _Card } from 'src/app/shared/_card.model';
import { CardService } from 'src/app/shared/_card.service';

@Component({
    selector: 'app-flashcardlist',
    templateUrl: './flashcardlist.component.html',
    styleUrls: ['./flashcardlist.component.scss']
})

export class FlashcardListComponent implements OnInit {
    _cards: _Card[] = new Array<_Card>();
    constructor(private _cardService: CardService, private router: Router) {

    }

    ngOnInit() {
        this._cards = this._cardService.getAll();
    }
    changeroute() {
        this.router.navigate(['/Dashboard/flashcard/details'])
    }

    deleteCard(id: number) {
        console.log(id + 'is deleted');
        this._cardService.delete(id);
    }
}
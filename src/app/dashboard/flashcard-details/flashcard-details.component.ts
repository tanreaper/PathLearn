import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { _Card } from 'src/app/shared/_card.model';
import { CardService } from 'src/app/shared/_card.service';

@Component({
    selector: 'app-flashcard-details',
    templateUrl: './flashcard-details.component.html',
    styleUrls: ['./flashcard-details.component.scss']
})

export class FlashcardDetailsComponent implements OnInit {

    _card: _Card;
    _cardId: number;
    new: boolean;
    constructor( private _cardService: CardService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this._card = new _Card();
            if (params.id) {
                this._card = this._cardService.get(params.id);
                this._cardId = params.id;
                this.new = false;
            } else {
                this.new = true;
            }
        })
        
    }

    onSubmit(form: NgForm) {
        if (this.new) {
            this._cardService.add(form.value);
            console.log(form.value);
        } else {
            this._cardService.update(this._cardId, form.value.title, form.value.body);
        }

        this.router.navigate(['/Dashboard/flashcard']);
    }

    cancel() {
        console.log('cancel is clicked');
        this.router.navigate(['/Dashboard/flashcard'])
    }
}
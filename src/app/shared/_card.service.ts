import { Injectable } from '@angular/core';
import { _Card } from './_card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  _cards: _Card[] = new Array<_Card>();
  constructor() { }

  getAll() {
    return this._cards;
  }

  get(id: number) {
    return this._cards[id];
  }

  getId(_card: _Card) {
    return this._cards.indexOf(_card);
  }

  add(_card: _Card) {
    let newLength = this._cards.push(_card);
    let index = newLength-1;
    return index;
  }

  update(id: number, title: string, body:string) {
    let _card = this._cards[id];
    _card.title = title;
    _card.body = body;
  }

  delete(id: number) {
    this._cards.splice(id, 1)
  }
    
}

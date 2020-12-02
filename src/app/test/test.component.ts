import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent {
  player: YT.Player
  public id = "zPG4NjIkCjc"
  
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }
  
}

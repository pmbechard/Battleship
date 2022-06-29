import { Board } from './gameboard';

export class Player {
  constructor() {
    this.board = new Board();
    this.opponent;
    // this.isUser;
  }

  aiAttack() {
    // FIXME: make smarter
    while (true) {
      let coord = [
        Math.round(Math.random() * 9),
        Math.round(Math.random() * 9),
      ];
      let shot = this.opponent.board.receiveAttack(coord);
      if (shot === null) {
        continue;
      }
      return coord;
    }
  }

  userAttack(coord) {
    let shot = this.opponent.board.receiveAttack(coord);
    if (shot === null) return false;
    return true;
  }
}

import { Board } from './gameBoard';

export class Player {
  constructor(isUser) {
    this.board = new Board();
    this.opponent;
    this.isUser = isUser;
  }

  aiAttack() {
    // FIXME: make smarter
    let shot = null;
    let coord;
    while (shot === null) {
      coord = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];
      shot = this.opponent.board.receiveAttack(coord);
    }
    return coord;
  }

  userAttack(coord) {
    let shot = this.opponent.board.receiveAttack(coord);
    if (shot === null) return false;
    return true;
  }
}

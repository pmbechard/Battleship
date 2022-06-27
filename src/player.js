import { Board } from './gameboard';

export class Player {
  constructor() {
    this.board = new Board();
    this.opponent;
    // this.isUser;
  }

  set opponent(opponent) {
    this.opponent = opponent;
  }

  aiAttack() {
    // FIXME: make smarter
    let coord = [
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
    ];
    let shot = this.opponent.board().receiveAttack(coord);
    if (shot === null) return false;
    return true;
  }

  userAttack(coord) {
    let shot = this.opponent.board().receiveAttack(coord);
    if (shot === null) return false;
    return true;
  }
}

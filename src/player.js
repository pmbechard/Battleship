import { Board } from './gameboard';

export class Player {
  constructor(isUser) {
    this.board = new Board();
    this.opponent;
    this.isUser = isUser;
  }

  aiAttack() {
    // FIXME: make smarter
    let coord = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];
    let shot = this.opponent.board.receiveAttack(coord);
    if (shot !== null) return coord;
  }

  userAttack(coord) {
    let shot = this.opponent.board.receiveAttack(coord);
    if (shot === null) return false;
    return true;
  }
}

// FIXME: user attacks are recording as hits/ misses on both grids??

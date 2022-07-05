import { Board } from './gameBoard';

export class Player {
  constructor(isUser) {
    this.board = new Board();
    this.opponent;
    this.isUser = isUser;
    if (!isUser) {
      this.shipUnderAttack;
      this.shipUnderAttackLocations;
    }
  }

  // aiAttack() {
  //   let shot = null;
  //   let coord;
  //   while (shot === null) {
  //     coord = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];
  //     shot = this.opponent.board.receiveAttack(coord);
  //   }
  //   return coord;
  // }

  aiAttack() {
    if (!this.shipUnderAttack) {
      let shot = null;
      let coord;
      while (shot === null) {
        coord = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];
        shot = this.opponent.board.receiveAttack(coord);
      }
      if (shot) {
        this.shipUnderAttack = this.opponent.board.board[coord[0]][coord[1]];
        this.shipUnderAttackLocations = this.shipUnderAttack.location.slice();
        this.shipUnderAttackLocations.filter((loc) => {
          !loc === coord;
        });
      }
      return coord;
    } else {
      let shot = null;
      let coord;
      let randomCoord;
      let targetedCoord;
      while (shot === null) {
        randomCoord = [
          Math.round(Math.random() * 9),
          Math.round(Math.random() * 9),
        ];
        targetedCoord =
          this.shipUnderAttackLocations[
            Math.round(
              Math.random() * (this.shipUnderAttackLocations.length - 1)
            )
          ];

        console.log('locations: ', this.shipUnderAttackLocations);
        console.log('targeted loc: ', targetedCoord);

        if (Math.round(Math.random()) === 0) {
          coord = randomCoord;
        } else {
          coord = targetedCoord;
          this.shipUnderAttackLocations.filter((loc) => {
            !loc === coord;
          });
        }
        shot = this.opponent.board.receiveAttack(coord);
      }
      if (this.shipUnderAttack.isSunk()) {
        this.shipUnderAttack = undefined;
        this.shipUnderAttackLocations = undefined;
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

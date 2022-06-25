const TOTAL_SHIP_POSITIONS = 17;

export class Board {
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
    this.hits = [];
    this.misses = [];
    this.ships = [];
  }

  place(ship, coord, dir) {
    if (!this.#checkValidPlace(ship, coord, dir)) return;
    if (dir === 'x') {
      let counter = 0;
      let pos = [];
      while (counter < ship.len) {
        this.board[coord[0]][coord[1] + counter] = 1;
        pos.push(this.board[coord[0] - counter][coord[1]]);
        counter++;
        console.log(this.board);
      }
    } else if (dir === 'y') {
      let counter = 0;
      let pos = [];
      while (counter < ship.len) {
        this.board[coord[0] - counter][coord[1]] = 1;
        pos.push(this.board[coord[0] - counter][coord[1]]);
        counter++;
      }
    }
    this.ships.push(ship);
    ship.setCoords(pos);
  }

  #checkValidPlace(ship, coord, dir) {
    if (dir === 'x') {
      if (coord[1] + ship.len <= 10) {
        for (let i = 0; i < ship.len; i++) {
          if (this.board[coord[0]][coord[1] + i] !== 0) {
            return false;
          }
        }
      }
    } else if (coord[0] - ship.len + 1 >= 0) {
      for (let i = 0; i < ship.len; i++) {
        if (this.board[coord[0] - i][coord[1]] !== 0) {
          return false;
        }
      }
    } else {
      return false;
    }
    return true;
  }

  receiveAttack(coord) {
    if (this.board[coord[0]][coord[1]] !== 0) {
      this.hits.push(coord);
      this.board[coord[0]][coord[1]].hit(coord);

      if (this.checkAllSunk()) {
        return null;
      } else {
        return true;
      }
    } else {
      this.missedShots.push(coord);
      return false;
    }
  }

  checkAllSunk() {
    // TODO: refactor to use ships' isSunk() functions
    return this.hits.length === TOTAL_SHIP_POSITIONS;
  }
}

export class Board {
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
    this.hits = [];
    this.misses = [];
    this.ships = [];
  }

  place(ship, coord, dir) {
    if (!this.#checkValidPlace(ship, coord, dir)) return false;

    this.ships.push(ship);

    let pos = new Array();
    if (dir === 'x') {
      for (let i = 0; i < ship.len; i++) {
        this.board[coord[0]][coord[1] + i] = ship;
        pos.push([coord[0], coord[1] + i]);
      }
    } else if (dir === 'y') {
      for (let i = 0; i < ship.len; i++) {
        this.board[coord[0] - i][coord[1]] = ship;
        pos.push([coord[0] - i, coord[1]]);
      }
    }
    ship.setCoords(pos);
  }

  #checkValidPlace(ship, coord, dir) {
    if (coord[0] > 9 || coord[1] > 9) return false;
    if (dir === 'y' && coord[0] - ship.len + 1 < 0) return false;
    if (dir === 'y') {
      for (let i = 0; i < ship.len; i++) {
        if (this.board[coord[0]][coord[1] + i] !== 0) return false;
      }
    }
    if (dir === 'x' && coord[1] + ship.len > 9) return false;
    if (dir === 'x') {
      for (let i = 0; i < ship.len; i++) {
        if (this.board[coord[0]][coord[1] + i] !== 0) return false;
      }
    }
    return true;
  }

  receiveAttack(coord) {
    if (this.board[coord[0]][coord[1]] !== 0) {
      this.hits.push(coord);
      this.board[coord[0]][coord[1]].hit(coord);
      if (this.board[coord[0]][coord[1]].isSunk()) {
        if (this.checkAllSunk()) {
          // TODO: GAME OVER
        }
      }
      return true;
    }
    this.misses.push(coord);
    return false;
  }

  checkAllSunk() {
    return this.ships.filter((ship) => ship.isSunk()).length === 5;
  }
}

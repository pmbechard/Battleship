export class Board {
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
    this.hits = new Array();
    this.misses = new Array();
    this.ships = new Array();
  }

  place(ship, coord, dir) {
    if (!this.checkValidPlace(ship, coord, dir)) return false;

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

  checkValidPlace(ship, coord, dir) {
    if (coord[0] > 9 || coord[1] > 9) return false;

    if (dir === 'x' && coord[1] + ship.len - 1 > 9) return false;
    if (dir === 'x') {
      for (let i = 0; i < ship.len; i++) {
        if (this.board[coord[0]][coord[1] + i] !== 0) return false;
      }
    }

    if (dir === 'y' && coord[0] - ship.len + 1 < 0) return false;
    if (dir === 'y') {
      for (let i = 0; i < ship.len; i++) {
        if (this.board[coord[0] - i][coord[1]] !== 0) return false;
      }
    }
    return true;
  }

  receiveAttack(coord) {
    for (let i = 0; i < this.hits.length; i++) {
      if (this.hits[i][0] === coord[0] && this.hits[i][1] === coord[1]) {
        return null;
      }
    }

    for (let i = 0; i < this.misses.length; i++) {
      if (this.misses[i][0] === coord[0] && this.misses[i][1] === coord[1]) {
        return null;
      }
    }

    if (this.board[coord[0]][coord[1]] !== 0) {
      this.hits.push({ 0: coord[0], 1: coord[1] });
      this.board[coord[0]][coord[1]].hit(coord);
      return true;
    } else {
      this.misses.push({ 0: coord[0], 1: coord[1] });
      return false;
    }
  }

  checkAllSunk() {
    return this.ships.filter((ship) => ship.isSunk()).length === 5;
  }
}

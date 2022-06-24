const TOTAL_SHIP_POSITIONS = 17;

function createGameBoard() {
  return {
    board: new Array(10).fill(0).map(() => new Array(10).fill(0)),
    hits: [],
    missedShots: [],
    ships: [],

    place(ship, coords, dir) {
      if (dir === 'x') {
        if (coords[1] + ship.len <= 10) {
          for (let i = 0; i < ship.len; i++) {
            if (this.board[coords[0]][coords[1] + i] !== 0) {
              return;
            }
          }
          let counter = 0;
          while (counter < ship.len) {
            this.board[coords[0]][coords[1] + counter] = 1;
            counter++;
          }
          this.ships.push(ship);
        }
      } else if (dir === 'y') {
        if (coords[0] - ship.len + 1 >= 0) {
          for (let i = 0; i < ship.len; i++) {
            if (this.board[coords[0] - i][coords[1]] !== 0) {
              return;
            }
          }
          let counter = 0;
          while (counter < ship.len) {
            this.board[coords[0] - counter][coords[1]] = 1;
            counter++;
          }
          this.ships.push(ship);
        }
      }
    },

    receiveAttack(coords) {
      if (this.board[coords[0]][coords[1]] === 1) {
        this.hits.push(coords);

        if (this.checkAllSunk()) {
          return null;
        } else {
          return true;
        }
      } else {
        this.missedShots.push(coords);
        return false;
      }
    },

    checkAllSunk() {
      // TODO: refactor to use ships' isSunk() functions
      return this.hits.length === TOTAL_SHIP_POSITIONS;
    },
  };
}

export { createGameBoard };

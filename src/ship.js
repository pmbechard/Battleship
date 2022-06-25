export class Ship {
  constructor(len) {
    this.len = len;
    this.damage = 0;
    this.location = [];
  }

  hit(coord) {
    if (
      this.location.some((row) => JSON.stringify(row) === JSON.stringify(coord))
    ) {
      this.damage++;
      return true;
    }
    return false;
  }

  isSunk() {
    return this.damage === this.len;
  }

  setCoords(location) {
    this.location = location;
  }
}

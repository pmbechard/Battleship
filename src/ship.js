export class Ship {
  constructor(len) {
    this.len = len;
    this.damage = 0;
    this.location = new Array();
  }

  hit(coord) {
    this.location.forEach((point) => {
      if (point[0] === coord[0] && point[1] === coord[1]) {
        this.damage++;
        return true;
      }
    });
    return false;
  }

  isSunk() {
    return this.damage === this.len;
  }

  setCoords(location) {
    this.location = location;
  }
}

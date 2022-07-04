export class Ship {
  constructor(len, name) {
    this.name = name;
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
    if (this.damage === this.len) {
      // TODO: display picture and msg
      return true;
    }
  }

  setCoords(location) {
    this.location = location;
  }
}

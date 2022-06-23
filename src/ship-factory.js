function createShip(len) {
  return {
    len: len,
    hitCounter: 0,
    hitPositions: [].fill(false, len),
    hit(num) {
      if (!this.hitPositions[num] === true) {
        this.hitCounter++;
        this.hitPositions[num] = true;
      }
    },
    isSunk() {
      return this.hitCounter === len;
    },
  };
}

export { createShip };

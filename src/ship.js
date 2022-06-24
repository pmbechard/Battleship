function createShip(len) {
  return {
    len: len,
    hitPositions: [].fill(false, len),
    hit(num) {
      if (!this.hitPositions[num] === true) {
        this.hitPositions[num] = true;
      }
    },
    isSunk() {
      return this.hitPositions.filter((position) => position).length === len;
    },
  };
}

export { createShip };

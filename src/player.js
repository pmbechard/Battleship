class Player {
  constructor(board, opponent) {
    this.#board = board;
    this.#opponent = opponent;
    this.#isUser;
  }

  get board() {
    return this.board;
  }

  aiAttack() {
    // FIXME: make smarter
    let coord = [
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
    ];
    let shot = this.#opponent.board().receiveAttack(coord);
    if (shot === null) return false;
    return true;
  }

  userAttack(coord) {
    let shot = this.#opponent.board().receiveAttack(coord);
    if (shot === null) return false;
    return true;
  }
}

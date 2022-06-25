import { Board } from './gameBoard';
import { Ship } from './ship';

describe('Tests a specific game board instance', () => {
  let gameBoard = new Board();
  let ship = new Ship(4);

  test('Game board factory function creates 2d 10x10 array filled with 0s', () => {
    expect(gameBoard.board.length).toBe(10);
    expect(gameBoard.board[0].length).toBe(10);
    expect(gameBoard.board[0][0]).toBe(0);
    expect(gameBoard.board[9][9]).toBe(0);
    expect(gameBoard.board[2][5]).toBe(0);
  });

  test('Game board place() function should allow ships to be placed in valid positions', () => {
    gameBoard.place(ship, [0, 0], 'x');
    gameBoard.place(ship, [9, 0], 'y');

    expect(gameBoard.board[0][0]).not.toBe(1);
    expect(gameBoard.board[0][1]).not.toBe(1);
    expect(gameBoard.board[0][2]).not.toBe(1);
    expect(gameBoard.board[0][3]).not.toBe(1);

    expect(gameBoard.board[9][0]).not.toBe(1);
    expect(gameBoard.board[8][0]).not.toBe(1);
    expect(gameBoard.board[7][0]).not.toBe(1);
    expect(gameBoard.board[6][0]).not.toBe(1);
  });

  test('Game board place() function should not allow ships to be placed in invalid positions', () => {
    gameBoard.place(ship, [0, 7], 'x');

    expect(gameBoard.board[0][7]).toBe(0);
    expect(gameBoard.board[0][8]).toBe(0);
    expect(gameBoard.board[0][9]).toBe(0);

    gameBoard.place(ship, [2, 5], 'y');

    expect(gameBoard.board[2][5]).toBe(0);
    expect(gameBoard.board[1][5]).toBe(0);
    expect(gameBoard.board[0][5]).toBe(0);

    gameBoard.place(ship, [8, 8], 'x');

    expect(gameBoard.board[8][1]).toBe(0);
    expect(gameBoard.board[8][2]).toBe(0);
    expect(gameBoard.board[8][3]).toBe(0);
    expect(gameBoard.board[8][4]).toBe(0);
  });

  test('Check that receiveAttack() responds to hits (true) and misses (false)', () => {
    expect(gameBoard.receiveAttack([0, 0])).toBe(true);
    expect(gameBoard.receiveAttack([0, 5])).toBe(false);
  });

  test('Check that receiveAttack() records hits and misses', () => {
    expect(gameBoard.hits[gameBoard.hits.length - 1]).toStrictEqual([0, 0]);
    expect(gameBoard.misses[gameBoard.misses.length - 1]).toStrictEqual([0, 5]);
  });
});

// // TODO: create tests for checkAllSunk() function
// describe('Tests board functionality by placing, hitting, and sinking all ships', () => {
//   let carrier = new Ship(5);
//   let battleship = new Ship(4);
//   let cruiser = new Ship(3);
//   let submarine = new Ship(3);
//   let destroyer = new Ship(2);
//   let board = new Board();

//   board.place(carrier, [4, 0], 'y');
//   board.place(battleship, [5, 3], 'x');
//   board.place(cruiser, [8, 1], 'y');
//   board.place(submarine, [2, 2], 'x');
//   board.place(destroyer, [9, 6], 'y');

//   test('Returns true when all ships are sunk', () => {
//     expect(board.checkAllSunk()).toBe(false);
//   });

//   test('Placement of carrier', () => {
//     board.receiveAttack([4, 0]);
//     board.receiveAttack([3, 0]);
//     board.receiveAttack([2, 0]);
//     board.receiveAttack([1, 0]);
//     board.receiveAttack([0, 0]);

//     expect(board.board[4][0]).toBe(1);
//     expect(board.board[3][0]).toBe(1);
//     expect(board.board[2][0]).toBe(1);
//     expect(board.board[1][0]).toBe(1);
//     expect(board.board[0][0]).toBe(1);
//   });

//   test('Returns true when all ships are sunk', () => {
//     board.receiveAttack([5, 3]);
//     board.receiveAttack([5, 4]);
//     board.receiveAttack([5, 5]);
//     board.receiveAttack([5, 6]);

//     board.receiveAttack([8, 1]);
//     board.receiveAttack([7, 1]);
//     board.receiveAttack([6, 1]);

//     board.receiveAttack([2, 2]);
//     board.receiveAttack([2, 3]);
//     board.receiveAttack([2, 4]);

//     board.receiveAttack([9, 6]);
//     board.receiveAttack([8, 6]);

//     expect(board.hits.length).toBe(17);
//     expect(board.checkAllSunk()).toBe(true);
//   });
// });

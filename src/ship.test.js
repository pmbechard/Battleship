import { Ship } from './ship';

describe('Tests ship of length 4 functions hit() and isSunk()', () => {
  let ship = new Ship(4);

  test('Ship is instantiated with proper length', () => {
    expect(ship.len).toBe(4);
  });

  test('Ship is instantiated with isSunk set as false', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('Hit function marks hit position', () => {
    ship.setCoords([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ]);
    ship.hit([0, 0]);
    expect(ship.damage).toBe(1);
  });

  test('Ship is sunk when all positions are hit', () => {
    ship.hit([0, 1]);
    ship.hit([0, 2]);
    ship.hit([0, 3]);
    expect(ship.isSunk()).toBe(true);
  });
});

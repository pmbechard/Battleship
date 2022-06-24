import { createShip } from './ship';

describe('Tests ship of length 4 functions hit() and isSunk()', () => {
  let ship = createShip(4);

  test('Ship is instantiated with proper length', () => {
    expect(ship.len).toBe(4);
  });

  test('Ship is instantiated with isSunk set as false', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('Hit function marks hit position', () => {
    ship.hit(0);
    expect(ship.hitPositions[0]).toBe(true);
  });

  test('Hit function marks multiple hit positions', () => {
    ship.hit(2);
    expect(ship.hitPositions[0]).toBe(true);
    expect(ship.hitPositions[2]).toBe(true);
  });

  test('Ship is sunk when all positions are hit', () => {
    ship.hit(1);
    ship.hit(3);
    expect(ship.isSunk()).toBe(true);
  });
});

import { createShip } from './ship-factory';

describe('Test ship of 4 length', () => {
  let ship = createShip(4);

  test('Ship is instantiated with proper length', () => {
    expect(ship.len).toBe(4);
  });

  test('Ship is instantiated with isSunk set as false', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('Hit function increases hit counter and marks hit position', () => {
    ship.hit(0);
    expect(ship.hitCounter).toBe(1);
    expect(ship.hitPositions[0]).toBe(true);
  });

  test("Hit function doesn't increase counter is position already hit", () => {
    ship.hit(0);
    expect(ship.hitCounter).toBe(1);
  });

  test('Ship is sunk when hit counter equals length', () => {
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    expect(ship.isSunk()).toBe(true);
  });
});

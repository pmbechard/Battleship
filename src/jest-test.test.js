import { sum } from './jest-test';

test('see if testing works with webpack', () => {
  expect(sum(2, 3)).toBe(5);
});

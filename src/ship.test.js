import { Ship } from './ship.js';

let testShip;

beforeEach(() => {
  testShip = new Ship(3);
})

test('Ship hit', () => {
  testShip.hit();
  console.log('Ship hit: ' + testShip.hitCount);
  expect(testShip.hitCount).toBe(1);
})

test('Ship sunk', () => {
  testShip.hit();
  testShip.hit();
  testShip.hit();
  console.log('Ship sunk: ' + testShip.isSunk());
  expect(testShip.isSunk()).toBe(true);
})


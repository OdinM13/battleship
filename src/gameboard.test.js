import { Gameboard } from './gameboard.js';

let testGameboard;

beforeEach(() => {
  testGameboard = new Gameboard;
})

test('Gameboard Size', () => {
  expect(testGameboard.board.length).toBe(10);
  expect(testGameboard.board[0].length).toBe(10);
})

test('Gameboard Initial Filling', () => {
  expect(testGameboard.board.every(row => {
    return row.every((value) => value === null);
  })).toBe(true);
})

test('Placement of Ship', () => {
  testGameboard.placeShip(0, 0, 'horizontal', 3);
  console.log(testGameboard.board);
  expect(testGameboard.board[0][0]).not.toBe(null);
  expect(testGameboard.board[0][1]).not.toBe(null);
  expect(testGameboard.board[0][2]).not.toBe(null);
})

describe('Placement of Ship Throw', () => {
  test('xCoordinate too small', () => {
    expect(() => {
      testGameboard.placeShip(-1, 0, 'horizontal', 3);
    }).toThrow('Invalid coordinates');
  })

  test('xCoordinate too big', () => {
    expect(() => {
      testGameboard.placeShip(10, 0, 'horizontal', 3);
    }).toThrow('Invalid coordinates');
  })

  test('yCoordinate too small', () => {
    expect(() => {
      testGameboard.placeShip(0, -1, 'horizontal', 3);
    }).toThrow('Invalid coordinates');
  })

  test('yCoordinate too big', () => {
    expect(() => {
      testGameboard.placeShip(0, 10, 'horizontal', 3);
    }).toThrow('Invalid coordinates');
  })

  test('xCoordinate out of bounds', () => {
    expect(() => {
      testGameboard.placeShip(9, 0, 'horizontal', 3);
    }).toThrow('Invalid X-Coordinate');
  })

  test('yCoordinate out of bounds', () => {
    expect(() => {
      testGameboard.placeShip(0, 9, 'vertical', 3);
    }).toThrow('Invalid Y-Coordinate');
  })
})

describe('Receive Attack', () => {
  test('Attack missing ship', () => {
    testGameboard.receiveAttack(1, 0);
    console.log(testGameboard.board);
    expect(testGameboard.board[0][1].firedUpon).toBe(true);
  })

  test('Attack hitting ship', () => {
    testGameboard.placeShip(0, 0, 'horizontal', 3);
    testGameboard.receiveAttack(1, 0);
    console.log(testGameboard.board);
    expect(testGameboard.board[0][1].firedUpon).toBe(true);
  })

})

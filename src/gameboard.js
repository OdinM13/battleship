import { Ship } from './ship.js';
// No.	Class of ship	  Size
// 1	  Carrier	        5
// 2	  Battleship	    4
// 3	  Destroyer	      3
// 4	  Submarine	      3
// 5	  Patrol Boat	    2

export class Gameboard {
  constructor() {
    this.board = this.generateNewBoard();
  }

  // Basic Battleship Boardsize is 10x10
  static BOARDSIZE = 10;

  generateNewBoard() {
    let board = [];
    for (let i = 0; i < Gameboard.BOARDSIZE; i++) {
      let row = new Array(Gameboard.BOARDSIZE).fill(null);
      board.push(row);
    }
    return board;
  }

  placeShip(xCoordinate, yCoordinate, orientation, shipSize) {
    this.#validatePlacement(xCoordinate, yCoordinate, orientation, shipSize);
    for (let i = 0; i < shipSize; i++) {
      if (orientation === 'vertical') {
        this.board[yCoordinate + i][xCoordinate] = { firedUpon: false, ship: new Ship(shipSize) };
      } else {
        this.board[yCoordinate][xCoordinate + i] = { firedUpon: false, ship: new Ship(shipSize) };
      }
    }
  }

  #validatePlacement(xCoordinate, yCoordinate, orientation, shipSize) {
    if ((xCoordinate < 0 || xCoordinate > Gameboard.BOARDSIZE - 1) || (yCoordinate < 0 || yCoordinate > Gameboard.BOARDSIZE - 1)) {
      throw new Error('Invalid coordinates');
    }
    if (orientation === 'vertical') {
      if (yCoordinate + shipSize > Gameboard.BOARDSIZE) {
        throw new Error('Invalid Y-Coordinate');
      }
    } else if (orientation === 'horizontal') {
      if (xCoordinate + shipSize > Gameboard.BOARDSIZE) {
        throw new Error('Invalid X-Coordinate');
      }
    } 
  }

  receiveAttack(xCoordinate, yCoordinate) {
    if (this.board[yCoordinate][xCoordinate] !== null) {
      this.board[yCoordinate][xCoordinate].firedUpon = true;
      this.board[yCoordinate][xCoordinate].ship.hit();
    } else {
      this.board[yCoordinate][xCoordinate] = { firedUpon: true, ship: null };
    }
  }
}

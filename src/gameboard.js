import { Ship } from './ship.js';

export class Gameboard {
  constructor() {
    this.board = this.generateNewBoard();
    this.ships = [];
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

    const newShip = new Ship(shipSize);
    this.ships.push(newShip);

    for (let i = 0; i < shipSize; i++) {
      if (orientation === 'vertical') {
        // this.board[yCoordinate + i][xCoordinate] = { firedUpon: false, ship: new Ship(shipSize) };
        this.board[yCoordinate + i][xCoordinate] = { firedUpon: false, ship: newShip };
      } else {
        // this.board[yCoordinate][xCoordinate + i] = { firedUpon: false, ship: new Ship(shipSize) };
        this.board[yCoordinate][xCoordinate + i] = { firedUpon: false, ship: newShip };
      }
    }
  }

  #validatePlacement(xCoordinate, yCoordinate, orientation, shipSize) {
    if ((xCoordinate < 0 || xCoordinate > Gameboard.BOARDSIZE - 1) || (yCoordinate < 0 || yCoordinate > Gameboard.BOARDSIZE - 1)) {
      throw new Error('Coordinates out of bounds');
    }

    // Note: Since no ships will be placed after shots were fired, checking for null is sufficient.
    if (this.board[yCoordinate][xCoordinate] !== null) {
      throw new Error('A ship is already placed at these coordinates');
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

  checkAllShipSunk() {
    // return this.board.flat().filter((element) => element !== null);
    return this.ships.every((ship) => ship.isSunk());
  }
}

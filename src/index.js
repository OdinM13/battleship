import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { RealPlayer, ComputerPlayer } from './player.js';

// No.	Class of ship	  Size
// 1	  Carrier	        5
// 2	  Battleship	    4
// 3	  Destroyer	      3
// 4	  Submarine	      3
// 5	  Patrol Boat	    2

export class Game {
  constructor () {
    this.realPlayer = new RealPlayer;
    this.computerPlayer = new ComputerPlayer;
    this.turn = this.realPlayer;
  }

  // Ship sizes
  static CARRIERSIZE = 5;
  static BATTLESHIPSIZE = 4;
  static DESTROYERSIZE = 3;
  static SUBMARINESIZE = 3;
  static PATROLBOATSIZE = 2;
  static ORIENTATION = ['horizontal', 'vertical'];

  populateBoard(player) {
    this.#placeRandomPosition(player, Game.CARRIERSIZE);
    this.#placeRandomPosition(player, Game.BATTLESHIPSIZE);
    this.#placeRandomPosition(player, Game.DESTROYERSIZE);
    this.#placeRandomPosition(player, Game.SUBMARINESIZE);
    this.#placeRandomPosition(player, Game.PATROLBOATSIZE);
  }

  #placeRandomPosition(player, shipType) {
    let isPlaced = false;

    while (!isPlaced) {
      try {
        player.gameBoard.placeShip(this.#getRandomInt(10), this.#getRandomInt(10), Game.ORIENTATION[this.#getRandomOrientation()], shipType);
        isPlaced = true;
      } catch {
        continue;
      }
    }
  }

  #getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  #getRandomOrientation() {
    return Math.floor(Math.random() * Game.ORIENTATION.length);
  }
}

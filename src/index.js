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

  populateBoard(player) {
    player.gameBoard.placeShip(0, 0, 'horizontal', Game.CARRIERSIZE);
    player.gameBoard.placeShip(0, 1, 'vertical', Game.BATTLESHIPSIZE);
    player.gameBoard.placeShip(1, 1, 'vertical', Game.DESTROYERSIZE);
    player.gameBoard.placeShip(2, 1, 'vertical', Game.SUBMARINESIZE);
    player.gameBoard.placeShip(3, 1, 'vertical', Game.PATROLBOATSIZE);
  }
}

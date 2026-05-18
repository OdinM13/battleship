import { Game } from './index.js';

test('PopulateBoard', () => {
  const newGame = new Game;
  newGame.populateBoard(newGame.realPlayer);
  console.log(newGame.realPlayer.gameBoard);
})

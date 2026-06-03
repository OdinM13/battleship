import { Game } from './index.js';

test('PopulateBoard', () => {
  const newGame = new Game;
  newGame.populateBoard(newGame.computerPlayer);
  console.log(newGame.computerPlayer.gameBoard);

  const flatGameboard = newGame.computerPlayer.gameBoard.board.flat();
  const filteredArray = flatGameboard.filter((value => value !== null));
  // All ship length added together is 17
  expect(filteredArray.length).toBe(17);
})

test('Random Board Population', () => {
  const newGame1 = new Game;
  const newGame2 = new Game;
  newGame1.populateBoard(newGame1.computerPlayer);
  newGame2.populateBoard(newGame2.computerPlayer);
  expect(JSON.stringify(newGame1.computerPlayer.gameBoard.board)).not.toBe(JSON.stringify(newGame2.computerPlayer.gameBoard.board));
})

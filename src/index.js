import { createDom } from './domCreation';
import { Player } from './player';
import { Ship } from './ship';
import './style.css';

// Game set-up
createDom();
let direction = 'x';
const rotateBtn = document.getElementById('rotate-btn');
rotateBtn.addEventListener('click', () => {
  direction === 'x' ? (direction = 'y') : (direction = 'x');
});
const user = new Player();
const userGrid = document.querySelectorAll('#user-board .grid-point');
let allShips = [
  new Ship(5),
  new Ship(4),
  new Ship(3),
  new Ship(3),
  new Ship(2),
];
console.log(allShips);
userGrid.forEach((point) => {
  point.addEventListener('click', () => {
    let coord = point.id.split('-');
    let ship = allShips[user.board.ships.length];
    user.board.place(ship, [Number(coord[1]), Number(coord[2])], direction);
    if (ship.location.length > 0) {
      userGrid.forEach((gridPoint) => {
        ship.location.forEach((loc) => {
          if (
            Number(gridPoint.id.split('-')[1]) === loc[0] &&
            Number(gridPoint.id.split('-')[2]) === loc[1]
          ) {
            gridPoint.style.opacity = '0.7';
            gridPoint.style.backgroundColor = 'rgb(0, 179, 0)';
            // TODO: add ship image
          }
        });
      });
    }
    if (user.board.ships.length === 5) {
      // TODO: change screen
    }
  });
});

// TODO:
// place com ships
// display both grids
// let turns go back and forth until one allSunk() is true

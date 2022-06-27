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
userGrid.forEach((point) => {
  point.addEventListener('click', () => {
    let coord = point.id.split('-');
    const ship = new Ship(3);
    // FIXME: following line returns false - should be true
    console.log(user.board.place(ship, [coord[1], coord[2]], direction));
  });
});

// TODO:
// place user ships
// place com ships
// display both grids
// let turns go back and forth until one allSunk() is true

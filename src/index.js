import { createDom } from './domCreation';
import { Player } from './player';
import { Ship } from './ship';
import './style.css';

// GAME SETUP
// createDom()
// ...global code
// initializeGameLayout()
// placeEnemyShips()
// startGameLoop()
// restart()

createDom();
let direction = 'x';
const rotateBtn = document.getElementById('rotate-btn');
const dirTxt = document.getElementById('dir-txt');
rotateBtn.addEventListener('click', () => {
  if (direction === 'x') {
    direction = 'y';
    dirTxt.textContent = 'direction: y';
  } else {
    direction = 'x';
    dirTxt.textContent = 'direction: x';
  }
});

const user = new Player();
const com = new Player();
user.opponent = com;
com.opponent = user;

const userGrid = document.querySelectorAll('#user-board .grid-point');
let allShips = [
  new Ship(5),
  new Ship(4),
  new Ship(3),
  new Ship(3),
  new Ship(2),
];
userGrid.forEach((point) => {
  point.addEventListener('mouseover', () => {
    point.classList.add('grid-point-hover');
    let ship = allShips[user.board.ships.length];
    let current = point;

    if (direction === 'x') {
      for (let i = 0; i < ship.len - 1; i++) {
        if (current.id.charAt(7) === '9') {
          break;
        }
        current.nextElementSibling.classList.add('grid-point-hover');
        current = current.nextElementSibling;
      }
    }

    if (direction === 'y') {
      for (let i = 0; i < ship.len; i++) {
        current.classList.add('grid-point-hover');
        let row = Number(current.id.charAt(5)) - 1;
        if (row < 0) {
          break;
        }
        let col = current.id.charAt(7);
        current = document.getElementById(`user-${row}-${col}`);
      }
    }
  });

  point.addEventListener('mouseleave', () => {
    userGrid.forEach((gridPoint) => {
      gridPoint.classList.remove('grid-point-hover');
    });
  });

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
      const userBoard = document.getElementById('user-board');
      userBoard.style.display = 'none';

      initializeGameLayout();
    }
  });
});

function initializeGameLayout() {
  userGrid.forEach((point) => {
    point.style.pointerEvents = 'none';
  });
  rotateBtn.style.display = 'none';
  dirTxt.style.display = 'none';

  const userBoard = document.getElementById('user-board');
  userBoard.style.display = 'grid';
  const userGridTitle = document.getElementById('user-grid-title');
  userGridTitle.style.display = 'grid';

  const comBoard = document.getElementById('com-board');
  comBoard.style.display = 'grid';
  const enemyGridTitle = document.getElementById('enemy-grid-title');
  enemyGridTitle.style.display = 'grid';

  const toastMsg = document.getElementById('toast');
  const toastContainer = document.getElementById('toast-container');
  if (toastContainer.classList.contains('show')) {
    setTimeout(() => {
      toastMsg.textContent =
        'Your turn. Choose a point on the enemy grid to attack.';
      toastContainer.classList.add('show');
      setTimeout(function () {
        toastContainer.classList.remove('show');
      }, 5000);
    }, 3000);
  } else {
    toastMsg.textContent =
      'Your turn. Choose a point on the enemy grid to attack.';
    toastContainer.classList.add('show');
    setTimeout(function () {
      toastContainer.classList.remove('show');
    }, 5000);
  }

  placeEnemyShips();

  const comGrid = document.querySelectorAll('#com-board .grid-point');
  comGrid.forEach((point) => {
    point.addEventListener('mouseover', () => {
      point.classList.add('grid-point-hover');
    });
    point.addEventListener('mouseleave', () => {
      point.classList.remove('grid-point-hover');
    });
    point.addEventListener('click', () => {
      let coord = [
        Number(point.id.split('-')[1]),
        Number(point.id.split('-')[2]),
      ];
      let currentHits = com.board.hits.length;
      user.userAttack(coord);
      if (com.board.hits.length > currentHits) {
        point.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
      } else {
        point.style.backgroundColor = 'rgba(221, 221, 221, 0.7)';
      }
      // TODO: send to comTurn()
    });
  });
}

function placeEnemyShips() {
  let enemyShips = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
  ];

  enemyShips.forEach((ship) => {
    let dir;
    Math.round(Math.random()) === 0 ? (dir = 'x') : (dir = 'y');
    let again = false;
    while (again === false) {
      let xCoord = Math.round(Math.random() * 9);
      let yCoord = Math.round(Math.random() * 9);
      again = com.board.place(ship, [xCoord, yCoord], dir);
    }
  });
}

function comTurn() {
  // TODO: disable com board interactions
  // TODO: call aiAttack() and update user.board
}

// TODO: add clear function and restart option

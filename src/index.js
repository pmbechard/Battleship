import { createDom } from './domCreation';
import { Player } from './player';
import { Ship } from './ship';
import { setToastMsg } from './toastMsg';
import './style.css';

// TODO: improve AI - add difficulties (easy - random; medium; current; hard - improved)
// TODO: add sound effects

function initializeSetUpScreen() {
  rotateBtn.addEventListener('click', () => {
    if (direction === 'x') {
      direction = 'y';
      dirTxt.textContent = 'direction: y';
    } else {
      direction = 'x';
      dirTxt.textContent = 'direction: x';
    }
  });

  user = new Player(true);
  com = new Player(false);
  user.opponent = com;
  com.opponent = user;

  let allShips = [
    new Ship(5, 'carrier', true),
    new Ship(4, 'battleship', true),
    new Ship(3, 'submarine', true),
    new Ship(3, 'cruiser', true),
    new Ship(2, 'destroyer', true),
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
}

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

  placeEnemyShips();
  userTurn();
  //   gameLoop();
}

function placeEnemyShips() {
  let enemyShips = [
    new Ship(5, 'carrier', false),
    new Ship(4, 'battleship', false),
    new Ship(3, 'submarine', false),
    new Ship(3, 'cruiser', false),
    new Ship(2, 'destroyer', false),
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
  const comGrid = document.querySelectorAll('#com-board .grid-point');
  comGrid.forEach((point) => {
    point.style.pointerEvents = 'none';
  });
  setToastMsg('Enemy is attacking...', 3000);
  setTimeout(() => {
    let currentHits = user.board.hits.length;
    let coord = com.aiAttack();
    let point = document.getElementById(`user-${coord[0]}-${coord[1]}`);
    if (user.board.hits.length > currentHits) {
      point.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
      showAttackMsg(point, 'hit');
    } else {
      point.style.backgroundColor = 'rgba(221, 221, 221, 0.7)';
      //   point.style.backgroundColor = 'rgba(0, 0, 221, 0.7)';
      showAttackMsg(point, 'miss');
    }

    comGrid.forEach((point) => {
      point.style.pointerEvents = 'auto';
    });
    setToastMsg('Your turn. Choose a point on the enemy grid to attack.');

    if (user.board.checkAllSunk()) {
      gameOver('com');
    }
  }, 1500);
}

function userTurn() {
  setToastMsg('Your turn. Choose a point on the enemy grid to attack.');

  const comGrid = document.querySelectorAll('#com-board .grid-point');
  comGrid.forEach((point) => {
    point.addEventListener('mouseover', () => {
      point.classList.add('grid-point-hover');
    });
    point.addEventListener('mouseleave', () => {
      point.classList.remove('grid-point-hover');
    });
    point.addEventListener('click', function clicked() {
      //   // TODO: delete me
      //   gameOver();
      //   // TODO: delete me
      let coord = [
        Number(point.id.split('-')[1]),
        Number(point.id.split('-')[2]),
      ];
      let currentHits = com.board.hits.length;
      let currentMisses = com.board.misses.length;
      let attack = user.userAttack(coord);
      if (attack) {
        if (com.board.hits.length > currentHits) {
          point.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
          showAttackMsg(point, 'hit');
        } else if (com.board.misses.length > currentMisses) {
          point.style.backgroundColor = 'rgba(221, 221, 221, 0.7)';
          //   point.style.backgroundColor = 'rgba(0, 0, 221, 0.7)';

          showAttackMsg(point, 'miss');
        }
        if (com.board.checkAllSunk()) {
          gameOver('user');
        } else {
          if (
            user.board.hits.length + user.board.misses.length ===
            com.board.hits.length + com.board.misses.length - 1
          ) {
            point.removeEventListener('click', clicked, false);

            comTurn();
          }
        }
      }
    });
  });
}

function showAttackMsg(point, result) {
  let msg = document.createElement('span');
  point.appendChild(msg);
  msg.textContent = result;
  point.style.display = 'flex';
  point.style.justifyContent = 'center';
  point.style.alignItems = 'center';
  msg.classList.add('attack-result');
  setTimeout(() => {
    msg.remove();
  }, 1500);
}

function gameOver(winner) {
  setTimeout(() => {
    const boardContainers = document.querySelectorAll('.board-container');
    boardContainers.forEach((board) => {
      board.style.display = 'none';
    });

    const gameOverTxt = document.createElement('h2');
    gameOverTxt.textContent = winner === 'user' ? 'You win!' : 'You lose...';
    gameOverTxt.style.fontSize = 'min(15vw, 72px)';
    const mainContent = document.getElementById('main-content');
    const msgContainer = document.createElement('div');
    msgContainer.style.width = '100vw';
    msgContainer.style.padding = '50px 0';
    msgContainer.style.display = 'flex';
    msgContainer.style.justifyContent = 'center';
    msgContainer.style.alignItems = 'center';
    msgContainer.appendChild(gameOverTxt);
    mainContent.appendChild(msgContainer);

    const restartBtn = document.createElement('button');
    mainContent.appendChild(restartBtn);
    restartBtn.textContent = 'Restart';
    restartBtn.classList.add('start-btn');

    restartBtn.addEventListener('click', () => {
      document.body.innerHTML = '';
      createDom();
      reInitialize();
      initializeSetUpScreen();
    });
  }, 3000);
}

function reInitialize() {
  userGrid = document.querySelectorAll('#user-board .grid-point');
  direction = 'x';
  rotateBtn = document.getElementById('rotate-btn');
  dirTxt = document.getElementById('dir-txt');
  com = undefined;
  user = undefined;
}

createDom();

let userGrid = document.querySelectorAll('#user-board .grid-point');
let direction = 'x';
let rotateBtn = document.getElementById('rotate-btn');
let dirTxt = document.getElementById('dir-txt');
let com;
let user;

initializeSetUpScreen();

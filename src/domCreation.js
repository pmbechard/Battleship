import bg from './img/metal-bg.jpg';
import rotateIcon from './img/rotate.png';

export function createDom() {
  const mainContent = document.createElement('div');
  document.body.appendChild(mainContent);
  mainContent.classList.add('main-content');

  const title = document.createElement('h1');
  mainContent.appendChild(title);
  title.textContent = 'Battleship';
  title.classList.add('title');

  const comBoardContainer = document.createElement('div');
  mainContent.appendChild(comBoardContainer);
  comBoardContainer.classList.add('board-container');

  const enemyGridTitle = document.createElement('p');
  comBoardContainer.appendChild(enemyGridTitle);
  enemyGridTitle.textContent = 'Enemy Waters';
  enemyGridTitle.style.display = 'none';
  enemyGridTitle.id = 'enemy-grid-title';

  const comBoard = document.createElement('div');
  comBoardContainer.appendChild(comBoard);
  comBoard.id = 'com-board';
  comBoard.classList.add('game-board');
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridPoint = document.createElement('div');
      comBoard.appendChild(gridPoint);
      gridPoint.classList.add('grid-point');
      gridPoint.id = `com-${i}-${j}`;
    }
  }

  const userBoardContainer = document.createElement('div');
  mainContent.appendChild(userBoardContainer);
  userBoardContainer.classList.add('board-container');

  const userGridTitle = document.createElement('p');
  userBoardContainer.appendChild(userGridTitle);
  userGridTitle.textContent = 'Friendly Waters';
  userGridTitle.style.display = 'none';
  userGridTitle.id = 'user-grid-title';

  const userBoard = document.createElement('div');
  userBoardContainer.appendChild(userBoard);
  userBoard.id = 'user-board';
  userBoard.classList.add('game-board');
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridPoint = document.createElement('div');
      userBoard.appendChild(gridPoint);
      gridPoint.classList.add('grid-point');
      gridPoint.id = `user-${i}-${j}`;
    }
  }

  const rotateBtn = document.createElement('button');
  const rotateImg = document.createElement('img');
  rotateImg.src = rotateIcon;
  rotateImg.style.height = '30px';
  rotateBtn.appendChild(rotateImg);
  userBoardContainer.appendChild(rotateBtn);
  rotateBtn.classList.add('rotate-btn');
  rotateBtn.id = 'rotate-btn';

  const directionTxt = document.createElement('p');
  userBoardContainer.appendChild(directionTxt);
  directionTxt.textContent = 'direction: x';
  directionTxt.id = 'dir-txt';
  directionTxt.style.display = 'none';

  const toastMsg = document.createElement('div');
  mainContent.appendChild(toastMsg);
  toastMsg.classList.add('toast');
  toastMsg.id = 'toast';
  toastMsg.textContent = 'Choose the location of your ships';

  const startBtn = document.createElement('button');
  mainContent.appendChild(startBtn);
  startBtn.textContent = 'Start';
  startBtn.classList.add('start-btn');

  startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    userBoard.style.display = 'grid';
    rotateBtn.style.display = 'block';
    directionTxt.style.display = 'block';
    toastMsg.classList.add('show');
    setTimeout(function () {
      toastMsg.classList.remove('show');
    }, 5000);
  });

  // TODO: footer
}

import bg from './img/metal-bg.jpg';

export function createDom() {
  const mainContent = document.createElement('div');
  document.body.appendChild(mainContent);
  mainContent.classList.add('main-content');

  const title = document.createElement('h1');
  mainContent.appendChild(title);
  title.textContent = 'Battleship';
  title.classList.add('title');

  const userBoardContainer = document.createElement('div');
  mainContent.appendChild(userBoardContainer);
  userBoardContainer.classList.add('board-container');

  const userBoard = document.createElement('div');
  userBoardContainer.appendChild(userBoard);
  userBoard.id = 'user-board';
  userBoard.classList.add('game-board');
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridPoint = document.createElement('div');
      userBoard.appendChild(gridPoint);
      gridPoint.classList.add('grid-point');
    }
  }

  const comBoardContainer = document.createElement('div');
  mainContent.appendChild(comBoardContainer);
  comBoardContainer.classList.add('board-container');

  const comBoard = document.createElement('div');
  comBoardContainer.appendChild(comBoard);
  comBoard.id = 'com-board';
  comBoard.classList.add('game-board');
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridPoint = document.createElement('div');
      comBoard.appendChild(gridPoint);
      gridPoint.classList.add('grid-point');
    }
  }

  const toastMsg = document.createElement('div');
  mainContent.appendChild(toastMsg);
  toastMsg.classList.add('toast');
  toastMsg.textContent = 'Choose the location of your ships';

  const startBtn = document.createElement('button');
  mainContent.appendChild(startBtn);
  startBtn.textContent = 'Start';
  startBtn.classList.add('start-btn');

  startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    userBoard.style.display = 'grid';
    toastMsg.classList.add('show');
    setTimeout(function () {
      toastMsg.classList.remove('show');
    }, 5000);
  });

  // TODO: footer
}

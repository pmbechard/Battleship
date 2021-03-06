import { setToastMsg } from './toastMsg';
// import bg from './img/metal-bg.jpg';
import rotateIcon from './img/rotate.png';
import ghLogo from './img/github.png';

export function createDom() {
  const mainContent = document.createElement('div');
  document.body.appendChild(mainContent);
  mainContent.classList.add('main-content');
  mainContent.id = 'main-content';

  const title = document.createElement('h1');
  mainContent.appendChild(title);
  title.textContent = 'Battleship';
  title.classList.add('title');

  const gridsContainer = document.createElement('div');
  mainContent.appendChild(gridsContainer);
  gridsContainer.style.display = 'flex';
  gridsContainer.style.justifyContent = 'center';
  gridsContainer.style.alignItems = 'center';
  gridsContainer.style.width = '100vw';
  gridsContainer.id = 'grids-container';

  const comBoardContainer = document.createElement('div');
  gridsContainer.appendChild(comBoardContainer);
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
  comBoard.style.display = 'none';
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridPoint = document.createElement('div');
      comBoard.appendChild(gridPoint);
      gridPoint.classList.add('grid-point');
      gridPoint.id = `com-${i}-${j}`;
    }
  }

  const userBoardContainer = document.createElement('div');
  gridsContainer.appendChild(userBoardContainer);
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

  const startBtn = document.createElement('button');
  mainContent.appendChild(startBtn);
  startBtn.textContent = 'Start';
  startBtn.classList.add('start-btn');

  startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    userBoard.style.display = 'grid';
    rotateBtn.style.display = 'block';
    directionTxt.style.display = 'block';
    setToastMsg('Place the ships on your grid.');
  });

  const footer = document.createElement('footer');
  document.body.appendChild(footer);
  const footerContent = document.createElement('small');
  footer.appendChild(footerContent);
  footerContent.innerHTML = 'Peyton Bechard &copy; 2022';

  const ghLinkImg = new Image();
  ghLinkImg.src = ghLogo;
  ghLinkImg.classList.add('gh-link');
  footer.appendChild(ghLinkImg);

  ghLinkImg.addEventListener('click', () => {
    window.open('https://github.com/pmbechard/Battleship', '_blank');
  });
}

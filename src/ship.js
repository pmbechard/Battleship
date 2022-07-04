import battleshipImg from './img/battleship.png';
import carrierImg from './img/carrier.png';
import cruiserImg from './img/cruiser.png';
import destroyerImg from './img/destroyer.png';
import submarineImg from './img/submarine.png';

export class Ship {
  constructor(len, name, isUser) {
    this.name = name;
    this.len = len;
    this.isUser = isUser;
    this.damage = 0;
    this.location = new Array();
    this.shipImg = new Image();
    switch (this.name) {
      case 'battleship':
        this.shipImg.src = battleshipImg;
        break;
      case 'carrier':
        this.shipImg.src = carrierImg;
        break;
      case 'cruiser':
        this.shipImg.src = cruiserImg;
        break;
      case 'destroyer':
        this.shipImg.src = destroyerImg;
        break;
      case 'submarine':
        this.shipImg.src = submarineImg;
        break;
    }
    this.shipImg.style.position = 'absolute';
    this.shipImg.style.zIndex = '2';
    this.shipImg.style.height = '30px';
    this.shipImg.style.width = `${30 * this.len}px`;
    this.shipImg.style.pointerEvents = 'none';
  }

  hit(coord) {
    // This isn't a logical place for this block... but it works
    if (this.location[0][0] !== this.location[1][0]) {
      this.shipImg.style.transform = 'rotate(90deg)';
      this.shipImg.style.bottom = `${15 * this.len - 15}px`;
    } else {
      this.shipImg.style.bottom = '0';
      this.shipImg.style.left = '0';
    }

    // The actual function begins below
    this.location.forEach((point) => {
      if (point[0] === coord[0] && point[1] === coord[1]) {
        this.damage++;
        return true;
      }
    });
    return false;
  }

  isSunk() {
    if (this.damage === this.len) {
      let player = this.isUser ? 'user' : 'com';
      const point = document.getElementById(
        `${player}-${this.location[0][0]}-${this.location[0][1]}`
      );
      point.appendChild(this.shipImg);
      point.style.pointerEvents = 'none';
      point.addEventListener('mouseenter', () => {
        point.classList.remove('grid-point-hover');
      });
      point.style.opacity = '1';
      return true;
    }
  }

  setCoords(location) {
    this.location = location;
  }
}

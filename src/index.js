import { createDom } from './domCreation';
import { Player } from './player';
import './style.css';

// TODO: create main game loop here
// TODO: add new module for DOM creation and manipulation

createDom();

let gameOn = true;
const user = new Player();
const com = new Player();
user.opponent = com;
com.opponent = user;

while (gameOn) {}

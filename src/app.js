import component from './component';

document.body.appendChild(component());

import './style.css';
import Game from "./game";

const game = new Game();
game.startGame();

import GameManager from '../game/gameManager.js';

export default class Room {
    constructor(id) {
        this.id = id;
        this.game = GameManager.createGame();
        this.started = false;
    }

    isFull() {
        return this.game.players.length >= 2;
    }
}
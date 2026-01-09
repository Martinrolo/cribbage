import { Game } from "../core/gameObjects.js";

export default class Room {
    constructor(id) {
        this.id = id;
        this.game = new Game();
        this.started = false;
        this.animationsDone = 0;
    }

    isFull() {
        return this.game.players.length >= 2;
    }
}
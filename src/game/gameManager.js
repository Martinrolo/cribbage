import { Game, Player, Round } from './gameObjects.js';

class GameManager {
    static createGame() {
        return new Game();
    }

    static addPlayer(game, playerId) {
        if (game.players.length >= 2) {
            throw new Error('Room pleine');
        }

        game.players.push(new Player(playerId));
    }

    static startGame(game) {
        game.initCards();
        game.giveCardsPlayers();
        game.started = true;
    }
}

export default GameManager;

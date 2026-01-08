export let rooms = new Map();

export class Game {
    constructor() {
        this.players = []
        this.finalScore = 121;
        this.cards = []
        this.round = null;
        this.cribIndex = 0;
        this.crib = [];
    }

    initCards() {
        for (let i = 0; i < 52; i++) {
            this.cards.push(i)
        }
    }

    giveCardsPlayers() {
        for (let i = 0; i < 6; i++) {
            for (const player of this.players) {
                player.cards[i] = this.dealCard()
            }
        }
    }

    dealCard()
    {
        let randomIndex = Math.floor(Math.random() * this.cards.length);
        let card = this.cards[randomIndex];
        this.cards.splice(randomIndex, 1);

        return card;
    }
}

export class Player {
    constructor(playerId) {
        this.playerId = playerId;
        this.name = "Player"
        this.score = 0;
        this.cards = [];
    }
}

export class Round {
    constructor() {
        this.playerTurn = 0
        this.step = 0;
    }
}
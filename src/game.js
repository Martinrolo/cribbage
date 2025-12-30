export class Game {
    constructor() {
        this.players = []
        this.finalScore = 120;
        this.round = new Round(this);

        initPlayers();
    }
}

export class Player {
    constructor() {
        this.name = "Player"
        this.score = 0;
        this.cards = [];
    }
}

export class Round {
    constructor(game) {
        this.game = game;
        this.cards = []

        this.initCards();
        this.giveCards();
    }

    initCards() {
        for (let i = 0; i < 52; i++) {
            this.cards.push(i)
        }
    }

    giveCards() {
        for (let i = 0; i < 6; i++) {
            //Donner 6 cartes par joueur
            for (const player of this.game.players) {
                let randomIndex = Math.floor(Math.random() * this.cards.length);

                //Ajouter carte au joueur et enlever du deck
                player.cards[i] = this.cards[randomIndex];
                this.cards.splice(randomIndex, 1);
            }
        }

        console.log("PLAYER CARDS: " + this.game.players[0].cards[0] + " " + this.game.players[0].cards[1]);
    }
}
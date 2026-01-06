socket.on('gameStarted', async (game) => {
    overlay.style.display = 'none';
    document.getElementById('deck').classList.remove('hidden')
    await dealCards(6, game.players)
});

socket.on('newRound', (game) => {
    const indexPlayer = getIndexPlayer(game.players)

    document.querySelector('.controls').classList.add('show')
    document.getElementById('confirmerCrib').classList.remove('hidden')
    document.querySelector('.center-table').style.visibility = 'visible'

    if(game.cribIndex === indexPlayer)
    {
        document.getElementById('messageMilieu').textContent = "Choisis des cartes pour ton crib"
    }

    else
    {
        document.getElementById('messageMilieu').textContent = "Choisis des cartes pour le crib de l'adversaire"
    }

    document.getElementById('messageMilieu').classList.remove('hidden')
    document.getElementById('deck').classList.add('hidden')
});

confirmerCrib.addEventListener('click', function() {
    if (selectedCards.length === MAX_SELECTED) {
        const cards = selectedCards.map(card => Number(card.dataset.card));

        socket.emit('cribCardsSelected', {
            room,
            playerId: localStorage.getItem('playerId'),
            cards
        });
    }
})

socket.on('confirmCribCardsSelected', (game, playerId) => {
    removeSelectedCards(selectedCards, playerId)
    const indexPlayer = getIndexPlayer(game.players)
    moveCardsToCrib(game.cribIndex === indexPlayer)
})

socket.on('startPlay', (game) => {  
    document.querySelectorAll('.selected').forEach(element => {
        element.classList.remove('selected');
    });

    document.querySelector('.controls').classList.remove('show')
    const jouer = document.getElementById('jouerCarteBtn');
    const go = document.getElementById('goBtn');
    const crib = document.getElementById('confirmerCrib');

    jouer.classList.remove('hidden');
    go.classList.remove('hidden');
    crib.classList.add('hidden');

    //Afficher nouveau message
    document.getElementById('deck').classList.remove('hidden');
    document.getElementById('messageMilieu').textContent = "Tour de l'adversaire...\nCompte: 0"


    if(game.round.playerTurn == getIndexPlayer(game.players))
    {
        document.querySelector('.controls').classList.add('show')
        document.getElementById('messageMilieu').textContent = "À ton tour!\nCompte: 0"
    }
})




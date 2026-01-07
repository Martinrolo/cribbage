async function dealCards(game)
{
    overlay.style.display = 'none';
    document.getElementById('deck').classList.remove('hidden')
    await dealCardsAnimation(6, game.players)
}

function newRound(game)
{
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
}

function confirmCribCardsSelected(game, playerId)
{
    removeSelectedCards(selectedCards, playerId)
    const indexPlayer = getIndexPlayer(game.players)
    moveCardsToCrib(game.cribIndex === indexPlayer)
}

confirmerCrib.addEventListener('click', function() {
    if (selectedCards.length === MAX_SELECTED) {
        const cards = selectedCards.map(card => Number(card.dataset.card));

        socket.emit('cribCardsSelected', { room, playerId: localPlayerId, cards });
    }
})
export function initCribSelectionUI(cribSelectionManager)
{
    confirmCrib.addEventListener('click', function() {
        cribSelectionManager.confirmCrib();
    })
}

export async function dealCards(game)
{
    overlay.style.display = 'none';
    deck.classList.remove('hidden')
    await dealCardsAnimation(6, game.players)
}

export function newRound(game)
{
    const indexPlayer = getIndexPlayer(game.players)

    controlsDiv.classList.add('show')
    confirmCribBtn.classList.remove('hidden')
    centerTableDiv.style.visibility = 'visible'

    if(game.cribIndex === indexPlayer)
    {
        midMessageDiv.textContent = "Choisis des cartes pour ton crib"
    }
    else
    {
        midMessageDiv.textContent = "Choisis des cartes pour le crib de l'adversaire"
    }

    midMessageDiv.classList.remove('hidden')
    deck.classList.add('hidden')
}

export function confirmCribCardsSelected(game, playerId)
{
    removeSelectedCards(playerId)
    const indexPlayer = getIndexPlayer(game.players)
    moveCardsToCribAnimation(game.cribIndex === indexPlayer)
}

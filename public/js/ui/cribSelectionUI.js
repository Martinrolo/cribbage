export function initCribSelectionUI(cribSelectionManager)
{
    confirmCrib.addEventListener('click', function() {
        cribSelectionManager.confirmCrib();
    })
}

export async function dealCards(game)
{
    overlay.style.display = 'none';
    document.getElementById('deck').classList.remove('hidden')
    await dealCardsAnimation(6, game.players)
}

export function newRound(game)
{
    const indexPlayer = getIndexPlayer(game.players)

    document.querySelector('.controls').classList.add('show')
    document.getElementById('confirmCrib').classList.remove('hidden')
    document.querySelector('.center-table').style.visibility = 'visible'

    if(game.cribIndex === indexPlayer)
    {
        document.getElementById('midMessage').textContent = "Choisis des cartes pour ton crib"
    }
    else
    {
        document.getElementById('midMessage').textContent = "Choisis des cartes pour le crib de l'adversaire"
    }

    document.getElementById('midMessage').classList.remove('hidden')
    document.getElementById('deck').classList.add('hidden')
}

export function confirmCribCardsSelected(game, playerId)
{
    removeSelectedCards(playerId)
    const indexPlayer = getIndexPlayer(game.players)
    moveCardsToCribAnimation(game.cribIndex === indexPlayer)
}

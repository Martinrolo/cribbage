export function initRoundOneUI(roundOneManager)
{
    //TODO: Mettre tous les getElementByID dans un fichier constant


    document.getElementById('playCardBtn').addEventListener('click', function() {
        roundOneManager.playCard(selectedCards)
    })
}

export function startPlay(game)
{       
    document.querySelectorAll('.selected').forEach(element => {
        element.classList.remove('selected');
    });

    document.getElementById('confirmCrib').classList.add('hidden');
    document.getElementById('deck').classList.remove('hidden');
    document.getElementById('midMessage').textContent = "Compte: 0"

    if(game.round.playerTurn == getIndexPlayer(game.players))
    {
        showButtonsRoundOne()
    }
}

export function showButtonsRoundOne()
{
    document.querySelector('.controls').classList.add('show')
    document.getElementById('playCardBtn').classList.remove('hidden')
    document.getElementById('goBtn').classList.remove('hidden')
}
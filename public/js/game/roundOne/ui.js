function startPlay(game)
{   
    maxSelectedCards = 1;
    selectedCards = [];
    
    document.querySelectorAll('.selected').forEach(element => {
        element.classList.remove('selected');
    });

    document.getElementById('confirmerCrib').classList.add('hidden');
    document.getElementById('deck').classList.remove('hidden');
    document.getElementById('messageMilieu').textContent = "Compte: 0"

    if(game.round.playerTurn == getIndexPlayer(game.players))
    {
        showButtonsRoundOne()
    }
}

function showButtonsRoundOne()
{
    document.querySelector('.controls').classList.add('show')
    document.getElementById('jouerCarteBtn').classList.remove('hidden')
    document.getElementById('goBtn').classList.remove('hidden')
}

document.getElementById('jouerCarteBtn').addEventListener('click', function() {
    console.log(selectedCards)
})
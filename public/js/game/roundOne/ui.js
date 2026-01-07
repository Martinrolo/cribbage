function startPlay(game)
{
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
}
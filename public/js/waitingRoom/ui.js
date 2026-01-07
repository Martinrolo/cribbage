if (!room) {
    window.location.replace('/');
}

//Éléments
const roomIdSpan = document.getElementById('room-id');
const copyBtn = document.getElementById('copy-room');
const overlay = document.getElementById('table-overlay');
const waitingText = document.getElementById('waiting-text');
const startBtn = document.getElementById('start-game-btn');
roomIdSpan.textContent = room;

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(room);
        copyBtn.textContent = '✅';
        setTimeout(() => copyBtn.textContent = '📋', 1000);
    } catch (err) {
        alert('Impossible de copier le code');
    }
});

function setPlayerInfo(game)
{
    const playerDivs = document.querySelectorAll('.player-score')

    for(let i = 0; i < game.players.length; i++)
    {
        const nameEl = playerDivs[i].querySelector('h2');
        const scoreEl = playerDivs[i].querySelector('span');

        nameEl.textContent = game.players[i].name;
        scoreEl.textContent = "Score: " + game.players[i].score;

        playerDivs[i].style.visibility = 'visible';

        if (game.players[i].playerId === localStorage.getItem('playerId')) {
            playerDivs[i].classList.add('you');
        }
    }
}

function updateWaitingState(game) {
    if (game.players.length < 2) {
        overlay.style.display = 'flex';
        waitingText.textContent = 'En attente de joueurs…';
        startBtn.style.display = 'none';
        return;
    }

    overlay.style.display = 'flex';
    waitingText.textContent = '2 joueurs connectés';
    startBtn.style.display = 'block';
    overlay.style.pointerEvents = 'all';
}






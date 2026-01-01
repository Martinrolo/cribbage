const params = new URLSearchParams(window.location.search);
const room = params.get('room');

if (!room) {
    window.location.replace('/');
}

//Dire qu'on a loadé la page
socket.emit('pageLoaded', room, localStorage.getItem('playerId'));

socket.on('playerJoined', (game) => {
    setPlayerInfo(game)
    updateWaitingState(game);
});

socket.on('roomFull', (msg) => {
    alert(msg);
    window.location.replace('/');
});

socket.on('error', (errorMsg) => {
    alert(errorMsg);
    window.location.replace('/');
});


function setPlayerInfo(game)
{
    console.log("SET INFO")
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

//Bouton copier
const roomIdSpan = document.getElementById('room-id');
const copyBtn = document.getElementById('copy-room');
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

const overlay = document.getElementById('table-overlay');
const waitingText = document.getElementById('waiting-text');
const startBtn = document.getElementById('start-game-btn');

function updateWaitingState(game) {
    if (game.players.length < 2) {
        overlay.style.display = 'flex';
        waitingText.textContent = 'En attente de joueurs…';
        startBtn.style.display = 'none';
        return;
    }

    // 2 joueurs
    overlay.style.display = 'flex';
    waitingText.textContent = '2 joueurs connectés';
    startBtn.style.display = 'block';
    overlay.style.pointerEvents = 'all';
}

startBtn.addEventListener('click', () => {
    socket.emit('startGame', room);
});
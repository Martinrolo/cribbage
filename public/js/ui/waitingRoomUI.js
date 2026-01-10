export function initWaitingRoomUI(waitingRoomManager)
{
    window.addEventListener("load", () => {
        waitingRoomManager.onPageLoad();
    });

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(localRoomId);
            copyBtn.textContent = '✅';
            setTimeout(() => copyBtn.textContent = '📋', 1000);
        } catch (err) {
            alert('Impossible de copier le code');
        }
    });

    startBtn.addEventListener('click', () => {
        waitingRoomManager.onStartGame();
    });
}


export function setPlayerInfo(game)
{

    for(let i = 0; i < game.players.length; i++)
    {
        const nameEl = playerScoreDiv[i].querySelector('h2');
        const scoreEl = playerScoreDiv[i].querySelector('span');

        nameEl.textContent = game.players[i].name;
        scoreEl.textContent = "Score: " + game.players[i].score;

        playerScoreDiv[i].style.visibility = 'visible';

        if (game.players[i].playerId === localPlayerId) {
            playerScoreDiv[i].classList.add('you');
        }
    }
}

export function updateWaitingState(game) {
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



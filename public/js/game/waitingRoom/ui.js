if (!room) {
    window.location.replace('/');
}

//Éléments
const roomIdSpan = document.getElementById('room-id');
const copyBtn = document.getElementById('copy-room');
const overlay = document.getElementById('table-overlay');
const waitingText = document.getElementById('waitingText');
const startBtn = document.getElementById('startGameBtn');
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

startBtn.addEventListener('click', () => {
    socket.emit('startGame', room);
});






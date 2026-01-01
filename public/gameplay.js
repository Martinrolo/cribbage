socket.on('gameStarted', (game) => {
    overlay.style.display = 'none';

    document.querySelectorAll('.card').forEach(card => {
        card.style.visibility = 'visible';
    });
});

//TODO: Faire logique startGame dans serveur
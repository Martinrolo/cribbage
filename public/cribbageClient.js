const params = new URLSearchParams(window.location.search);
const room = params.get('room');

if (!room) {
    window.location.replace('/');
}

//Dire qu'on a loadé la page
socket.emit('pageLoaded', room);

socket.on('gameInfo', (game) => {
    console.log(game)
    setName("test", 0)
});

function setName(name, index)
{
    document.querySelectorAll('.player-score')[0].innerHTML = name;
}
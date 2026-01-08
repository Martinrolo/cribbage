import menuSockets from './menu.js';
import waitingRoomSockets from './waitingRoom.js';
// import cribSelection from './cribSelection.js';
// import roundOne from './roundOne.js';

export default function registerSockets(io, socket) {
    menuSockets(io, socket);
    waitingRoomSockets(io, socket);
    // cribSelectionSockets(io, socket);
    // roundOneSockets(io, socket);
}
import MenuSockets from './core/menu/menuSockets.js'

import WaitingRoomSockets from './core/waitingRoom/waitingRoomSockets.js';
import WaitingRoomManager from './core/waitingRoom/waitingRoomManager.js';

import CribSelectionSockets from './core/cribSelection/cribSelectionSockets.js';
import CribSelectionManager from './core/cribSelection/cribSelectionManager.js';

export default function registerSocketsAndManagers(io, socket) {
    const menuSockets = new MenuSockets(socket);

    const waitingRoomManager = new WaitingRoomManager();
    const waitingRoomSockets = new WaitingRoomSockets(io, socket, waitingRoomManager)
    waitingRoomManager.setSockets(waitingRoomSockets);

    const cribSelectionManager = new CribSelectionManager();
    const cribSelectionSockets = new CribSelectionSockets(io, socket, cribSelectionManager);
    cribSelectionManager.setSockets(cribSelectionSockets);
}
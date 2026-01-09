import WaitingRoomManager from '../core/waitingRoom/waitingRoomManager.js';
import WaitingRoomSockets from '../core/waitingRoom/waitingRoomSockets.js';
import CribSelectionManager from '../core/cribSelection/cribSelectionManager.js';
import CribSelectionSockets from '../core/cribSelection/cribSelectionSockets.js';

import { initWaitingRoomUI } from '../ui/waitingRoomUI.js';
import { initCribSelectionUI } from '../ui/cribSelectionUI.js';

const waitingRoomManager = new WaitingRoomManager();
const waitingRoomSockets = new WaitingRoomSockets(socket, waitingRoomManager);
waitingRoomManager.setSockets(waitingRoomSockets);
initWaitingRoomUI(waitingRoomManager);

const cribSelectionManager = new CribSelectionManager();
const cribSelectionSockets = new CribSelectionSockets(socket, cribSelectionManager);
cribSelectionManager.setSockets(cribSelectionSockets);
initCribSelectionUI(cribSelectionManager);


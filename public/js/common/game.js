import WaitingRoomManager from '../core/waitingRoom/waitingRoomManager.js';
import WaitingRoomSockets from '../core/waitingRoom/waitingRoomSockets.js';
import CribSelectionManager from '../core/cribSelection/cribSelectionManager.js';
import CribSelectionSockets from '../core/cribSelection/cribSelectionSockets.js';
import RoundOneManager from '../core/roundOne/roundOneManager.js';
import RoundOneSockets from '../core/roundOne/roundOneSockets.js';

import { initWaitingRoomUI } from '../ui/waitingRoomUI.js';
import { initCribSelectionUI } from '../ui/cribSelectionUI.js';
import { initRoundOneUI } from '../ui/roundOneUI.js';

const waitingRoomManager = new WaitingRoomManager();
const waitingRoomSockets = new WaitingRoomSockets(socket, waitingRoomManager);
waitingRoomManager.setSockets(waitingRoomSockets);
initWaitingRoomUI(waitingRoomManager);

const cribSelectionManager = new CribSelectionManager();
const cribSelectionSockets = new CribSelectionSockets(socket, cribSelectionManager);
cribSelectionManager.setSockets(cribSelectionSockets);
initCribSelectionUI(cribSelectionManager);

const roundOneManager = new RoundOneManager();
const roundOneSockets = new RoundOneSockets(socket, roundOneManager);
roundOneManager.setSockets(roundOneSockets);
initRoundOneUI(roundOneManager);


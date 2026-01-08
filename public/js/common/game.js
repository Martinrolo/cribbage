import WaitingRoomManager from '../core/waitingRoom/waitingRoomManager.js';
import WaitingRoomSockets from '../core/waitingRoom/waitingRoomSockets.js';

import { initWaitingRoomUI } from '../ui/waitingRoomUI.js';

const waitingRoomManager = new WaitingRoomManager();
const waitingRoomSockets = new WaitingRoomSockets(socket, waitingRoomManager);
waitingRoomManager.setSockets(waitingRoomSockets);

initWaitingRoomUI(waitingRoomManager);
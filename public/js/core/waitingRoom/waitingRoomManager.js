import { updateWaitingState, setPlayerInfo } from '../../ui/waitingRoomUI.js';

export default class WaitingRoomManager {
    setSockets(sockets) {
        this.sockets = sockets;
    }

    onPageLoad() {
        if (!localRoomId) {
            window.location.replace('/');
            return;
        }

        this.sockets.emitPageLoaded(localRoomId, localPlayerId);
    }

    onPlayerJoined(game) {
        setPlayerInfo(game);
        updateWaitingState(game);
    }

    onStartGame() {
        this.sockets.emitStartGame(localRoomId);
    }

    onError(message) {
        alert(message);
        window.location.replace('/');
    }
}

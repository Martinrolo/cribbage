export function initMenuUI(menuManager) {
    createRoomBtn.addEventListener('click', () => {
        menuManager.createRoom();
    });

    joinRoomBtn.addEventListener('click', () => {
        menuManager.joinRoom(roomInput.value);
    });
}
import MenuManager from '../core/menu/menuManager.js';
import MenuSockets from '../core/menu/menuSockets.js';
import { initMenuUI } from '../ui/menuUI.js';

const menuManager = new MenuManager();
const socketManager = new MenuSockets(socket, menuManager);

menuManager.setSocket(socketManager);
initMenuUI(menuManager);
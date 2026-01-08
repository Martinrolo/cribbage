const params = new URLSearchParams(window.location.search);
const room = params.get('room');
const socket = io('http://localhost:5000/')
const localPlayerId = localStorage.getItem('playerId')
const MAX_SELECTED_CRIB = 2;
const MAX_SELECTED_PLAY = 1

let selectedCards = [];
let maxSelectedCards = 2
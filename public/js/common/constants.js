const socket = io('http://localhost:5000/')

const params = new URLSearchParams(window.location.search);
const localRoomId = params.get('room');
const localPlayerId = crypto.randomUUID();

let selectedCards = [];
let maxSelectedCards = 2;